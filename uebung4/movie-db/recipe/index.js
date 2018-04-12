const express = require('express');
const CsvDb = require('csv-db');
const Controller = require('./controller');

const router = express.Router();

const recipes = new CsvDb('./db/recipe.csv', [
  'id',
  'title',
  'time',
  'rating',
  'level',
  'ingredients',
  'manual',
  'created',
]);

const controller = new Controller(recipes);

router.get('/', (req, res) => controller.getAll(req, res));

module.exports = router;
