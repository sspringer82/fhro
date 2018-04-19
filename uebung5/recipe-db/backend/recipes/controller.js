const model = require('./model');

module.exports = {
  async getAllAction(req, res) {
    let recipes;
    try {
      recipes = await model.getAll();
    } catch (e) {
      console.log(e);
    }
    res.json(recipes);
  },

  async getOneAction(req, res) {
    const id = parseInt(req.params.id, 10);
    let recipe;
    try {
      const recipe = await model.get(id);
    } catch (e) {
      console.log(e);
    }
    res.json(recipe);
  },

  async createAction(req, res) {
    let recipe;
    const data = req.body;
    try {
      recipe = await model.create(data);
    } catch (e) {
      console.log(e);
    }
    res.json(recipe);
  },

  async updateAction(req, res) {
    const data = req.body;
    const id = parseInt(req.params.id, 10);
    let recipe;
    try {
      recipe = await model.update(data, id);
    } catch (e) {
      console.log(e);
    }
    res.json(recipe);
  },

  async deleteAction(req, res) {
    const id = parseInt(req.params.id, 10);
    let result;
    try {
      result = await model.delete(id);
    } catch (e) {
      console.log(e);
    }
    res.json(result);
  },
};
