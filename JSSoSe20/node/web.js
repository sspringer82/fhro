require('http')
  .createServer((req, res) => res.end('foo'))
  .listen(8080, () => console.log('server running'));
