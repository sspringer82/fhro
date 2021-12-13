import User from './user.js';

import { createServer } from 'http';

const port = 8181;

// alt:
// const User = require('./user');
const user = new User('Klaus', 42);
console.log(user.getName());

createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World!\n');
}).listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
