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

router.put('/:id', async (req, res) => {});

router.delete('/:id', async (req, res) => {});

export default router;
