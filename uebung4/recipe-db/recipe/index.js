const express = require('express');
const CsvDb = require('csv-db');
const Controller = require('./controller');

const router = express.Router();

const recipes = new CsvDb('./db/recipe.csv');

const controller = new Controller(recipes);

router.get('/', (req, res) => controller.getAll(req, res));
router.get('/delete/:id', (req, res) => controller.delete(req, res));

module.exports = router;
