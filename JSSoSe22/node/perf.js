import { createServer } from 'node:http';
import { readFile } from 'node:fs';

createServer((request, response) => {
  readFile('content.txt', 'utf-8', (err, data) => {
    console.log(data.length);
    response.end(data);
  });
}).listen(8080, () => console.log('server hört dir zu!'));
