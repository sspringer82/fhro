const express = require('express');
const addressRouter = require('./address');
const { join } = require('path');
const bodyParser = require('body-parser');
const logger = require('./shared/log.middleware');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
// app.use(logger);
app.use(morgan('combined'));
app.use(express.static('public'));

// ersetzt durch express.static
// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, '/public/index.html'));
// });

app.use('/address', addressRouter);

app.post('/users', (req, res) => {
  res.send('foo');
});
app.all('/users', (req, res) => {
  res.send('foo');
});
// catch all!
// app.all('*', (req, res) => res.send('Nope!'));

app.listen(8089, () => {
  console.log('Dat geht!');
});
