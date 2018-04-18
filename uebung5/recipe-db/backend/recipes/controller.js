const model = require('./model');

module.exports = {
  async getAllAction(req, res) {
    const recipes = await model.getAll();
    res.json(recipes);
  },
};
