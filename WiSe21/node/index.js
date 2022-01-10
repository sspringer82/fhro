import express from 'express';
import { config } from 'dotenv';

import User from './user.js';
import logger from './logger.js';

const {
  parsed: { PORT },
} = config();

const app = express();
logger(app);

app.use(express.json());

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

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send(`Hello ${JSON.stringify(req.body)}`);
});

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`));
