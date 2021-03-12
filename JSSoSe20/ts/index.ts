import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ name: 'Klaus' }));

app.listen(8080);
