import express from 'express';
import User from './user.js';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { config } from 'dotenv';

const {
  parsed: { PORT },
} = config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const accessLogStream = createWriteStream(join(__dirname, 'access.log'), {
  flags: 'a',
});

app.use(morgan('combined', { stream: accessLogStream }));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/:name/:age', (request, response) => {
  const params = request.params;
  const user = new User(params.name, params.age);
  response.send(user.getName());
});

// wird nie ausgeführt
app.get('/klaus/42', (req, res) => {
  res.send('Hello klaus');
});

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`));
