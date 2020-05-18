const model = require('./model');

const getAll = (req, res) => {
  res.json(model.getAll());
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id, 10);
  res.json(model.getOne(id));
};

const create = (req, res) => {
  model.create(req.body);
  res.status(201).send('you did it');
  // insert new data
};

module.exports = {
  getAll,
  getOne,
  create,
};
