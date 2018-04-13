const express = require('express');

const recipeRouter = require('./recipe');
const logger = require('./logger');

const app = express();

app.set('view engine', 'ejs');
app.use(logger());

app.use('/recipe', recipeRouter);

app.listen(8080, () =>
  console.log('server is listening to http://localhost:8080'),
);
