const express = require('express');

const app = express();

app.listen(8080, () =>
  console.log('server is listening to http://localhost:8080'),
);
