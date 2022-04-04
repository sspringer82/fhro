import { createServer } from 'http';

createServer((req, res) => {
    console.log(req.url);

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/user/klaus') {
        res.end('Hallo Klaus');
    } else {
        res.write('Hello');
        res.write('World');

        res.end('!\n');

    }

}).listen(3000, () => console.log('Server listens to http://localhost:3000'));
