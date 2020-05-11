const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    name: 'Basti',
  });
});
app.post('/users', (req, res) => {
  res.send('foo');
});
app.all('/users', (req, res) => {
  res.send('foo');
});

app.listen(8089);
