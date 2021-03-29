// eigene module
import User from './user.mjs';
const klaus = new User('Klaus', 'Müller');
console.log(klaus.getFullname());

/*
// interne module
import http from 'http';
http.createServer((req, res) => res.end('foo')).listen(8080);

import { createServer } from 'http';
createServer((req, res) => res.end('foo')).listen(8080);
*/

// npm
// import { sum } from 'lodash';
import _ from 'lodash';
const arr = [1, 2, 3];
const result = _.sum(arr);
console.log(result);
