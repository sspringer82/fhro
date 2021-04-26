import express from 'express';
import personService from './service.mjs';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const person = await personService.getOne(id);
  res.json(person);
});

router.get('/', async (req, res) => {
  const persons = await personService.getAll();
  res.json(persons);
});

router.post('/', async (req, res) => {
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
