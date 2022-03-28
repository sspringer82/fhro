import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import isOdd from 'is-odd';
import User from './user.js';
import { readFileSync } from 'node:fs';

console.log('Hallo Welt!');
const klaus = new User('Klaus', 'Müller');
console.log(`Hallo ${klaus.getFullName()}`);
console.log(isOdd('1')); //=> true

const content = await readFile('./public/index.html', 'utf-8');

const server = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(content);
});

server.listen(8080, () => console.log('listening'));