const express = require('express');
const CsvDb = require('csv-db');
const Controller = require('./controller');

const router = express.Router();

const recipes = new CsvDb('./db/recipe.csv');

const controller = new Controller(recipes);

router.get('/', (req, res) => controller.getAll(req, res));
router.get('/', controller.getAll.bind(controller));
// router.get('/', controller.getAll); geht nicht, weil kontext verloren geht
router.get('/delete/:id', (req, res) => controller.delete(req, res));
router.get('/form/:id?', (req, res) => controller.form(req, res));
router.post('/save', (req, res) => controller.save(req, res));

module.exports = router;
