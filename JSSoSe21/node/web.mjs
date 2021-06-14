import http from 'http';
import { fork } from 'child_process';
// http.createServer((req, res) => res.end('foo')).listen(8080);

const server = http.createServer();
server.on('request', async (req, res) => {
  const child = fork('./index.js');
  console.time('incoming request');
  console.log(req.method, req.url);
  res.write('Hallo ');
  res.write('Welt');
  res.end();
  console.timeEnd('outgoing response');
});

server.on('error', (e) => {
  console.error(e);
});
server.listen(8080);
