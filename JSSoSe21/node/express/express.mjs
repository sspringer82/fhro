import express from 'express';
import { userRouter } from './user-route.mjs';

const app = express();

app.get('/', (req, res) => {
  res.json({ id: 1, firstname: 'Klaus', lastname: 'Müller' });
});

app.use('/user', userRouter);

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
