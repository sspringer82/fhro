import { readFile } from 'fs';

import add from './module.mjs';

console.log(add(2, 2));

readFile('./module.mjs', 'utf8', (err, data) => console.log(data));
