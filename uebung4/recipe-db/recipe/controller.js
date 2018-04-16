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
    let promise;
    if (req.params.id) {
      promise = this.db.get(req.params.id);
    } else {
      promise = Promise.resolve({ id: null, title: null });
    }
    promise.then(recipe =>
      res.render(__dirname + '/views/form', { baseUrl: req.baseUrl, recipe }),
    );
  }

  async save(req, res) {
    if (req.body.id) {
      this.db.update(req.body, req.body.id);
    } else {
      await this.db.insert(req.body);
    }
    res.redirect(req.baseUrl);
  }
};
