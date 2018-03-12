/* jshint esversion: 6 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.write('Nome: Fábio<br>');
    res.write('Nascimento: 05-10-1983<br>');
    res.end('E-mail: fabio@tramasoli.com<br>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});