import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({ name: 'klaus' });
});

app.listen(8080);
