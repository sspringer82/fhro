const express = require('express');
const recipesRouter = require('./recipes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/recipes', recipesRouter);

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
