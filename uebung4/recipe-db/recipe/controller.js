module.exports = class Controller {
  constructor(db) {
    this.db = db;
  }
  getAll(req, res) {
    this.db.get().then(
      recipes => {
        res.render(__dirname + '/views/list', {
          recipes,
          baseUrl: req.baseUrl,
        });
      },
      err => {
        console.log(err);
      },
    );
  }

  delete(req, res) {
    const id = parseInt(req.params.id, 10);
    this.db.delete(id).then(
      data => {
        res.redirect(req.baseUrl);
      },
      err => {
        console.log(err);
      },
    );
  }

  form(req, res) {
    const recipe = { id: null, title: null };
    res.render(__dirname + '/views/form', { baseUrl: req.baseUrl, recipe });
  }

  async save(req, res) {
    if (req.body.id) {
      csvDb.update(req.body, req.body.id);
    } else {
      await csvDb.insert(user);
    }
    res.redirect(req.baseUrl);
  }
};
