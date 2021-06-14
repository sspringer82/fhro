import express from 'express';
import personService from './service.mjs';
import { body, validationResult } from 'express-validator';
import validator from './validator.mjs';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const person = await personService.getOne(id);
  res.json(person);
});

/**
 * @openapi
 * /:
 *   get:
 *     description: Get all persons
 *     responses:
 *       200:
 *         description: returns all persons.
 */
router.get('/', async (req, res) => {
  const persons = await personService.getAll();
  res.json(persons);
});

/**
 * @openapi
 * /:
 *   post:
 *     description: create new Person
 *     responses:
 *       200:
 *         description: person successfully generated
 */
router.post('/', validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const newPerson = await personService.create(req.body);
  res.json(newPerson);
});

router.put('/:id', async (req, res) => {
  const updatedPerson = await personService.update(req.body);
  res.json(updatedPerson);
});

router.delete('/:id', async (req, res) => {
  const result = await personService.delete(parseInt(req.params.id, 10));
  res.json(result);
});

export default router;
