const CsvDb = require('csv-db');
const csvDb = new CsvDb('input.csv', ['id', 'username', 'password']);

module.exports = {
  getAll() {
    return csvDb.get();
  },
};
