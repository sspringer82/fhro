module.exports = class Controller {
  constructor(db) {
    this.db = db;
  }
  async getAll(req, res) {
    try {
      const recipes = await this.db.get();
      res.render(__dirname + '/views/list', {
        recipes,
        baseUrl: req.baseUrl,
      });
    } catch (err) {
      res.status = 500;
      res.send(err);
    }
  }

  async delete(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.db.delete(id);
      res.redirect(req.baseUrl);
    } catch (err) {
      res.status = 500;
      res.send(err);
    }
  }

  async form(req, res) {
    let recipe = { id: null, title: null };
    if (req.params.id) {
      recipe = await this.db.get(req.params.id);
    }
    res.render(__dirname + '/views/form', { baseUrl: req.baseUrl, recipe });
  }

  async save(req, res) {
    if (req.body.id) {
      await this.db.update(req.body, req.body.id);
    } else {
      await this.db.insert(req.body);
    }
    res.redirect(req.baseUrl);
  }
};
