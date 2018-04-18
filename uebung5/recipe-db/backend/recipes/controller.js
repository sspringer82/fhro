const model = require('./model');

module.exports = {
  async getAllAction(req, res) {
    const recipes = await model.getAll();
    res.json(recipes);
  },

  async getOneAction(req, res) {
    const id = parseInt(req.params.id, 10);
    const recipe = await model.get(id);
    res.json(recipe);
  },
};
