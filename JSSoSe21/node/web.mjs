import http from 'http';
// http.createServer((req, res) => res.end('foo')).listen(8080);

const server = http.createServer();
server.on('request', (req, res) => {
  console.log(req.method, req.url);
  res.write('Hallo ');
  res.write('Welt');
  res.end();
});
server.on('error', (e) => {
  console.error(e);
});
server.listen(8080);
