const CsvDb = require('csv-db');
const csvDb = new CsvDb('db/db.csv');

module.exports = {
  getAll() {
    return csvDb.get();
  },
  get(id) {
    return csvDb.get(id);
  },
  create(data) {
    data.created = Date.now();
    return csvDb.insert(data);
  },
  update(data, id) {
    return csvDb.update(data, id);
  },
  delete(id) {
    return csvDb.delete(id);
  },
};
