import express from 'express';
import morgan from 'morgan';
import { createWriteStream } from 'node:fs';
import compression from 'compression';
import userRouter from './user/index.js';

const app = express();
app.use(express.json());

const accessLogStream = createWriteStream('access.log', { flags: 'a' })
app.use(compression());
app.use(morgan('combined', { stream: accessLogStream }))

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use('/users', userRouter);

app.listen(8080, () => console.log('Server listens to http://localhost:8080'));