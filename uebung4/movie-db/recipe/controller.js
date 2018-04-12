module.exports = class Controller {
  constructor(db) {
    this.db = db;
  }
  getAll(req, res) {
    this.db.get().then(
      recipes => {
        res.render(__dirname + '/views/list', { recipes });
      },
      err => {
        console.log(err);
      },
    );
  }
};
