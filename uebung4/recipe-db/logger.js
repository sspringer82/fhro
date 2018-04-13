const morgan = require('morgan');
const fs = require('fs');

module.exports = function logger() {
  const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {
    flags: 'a',
  });
  return morgan('combined', { stream: accessLogStream });
};
