const http = require('http');
const { URL, URLSearchParams } = require('url');

const hostname = 'test.nodeapp.hh';
const port = 4000;

const server = http.createServer((request, response) => {

  const name = new URLSearchParams(
      request.url.substring(
          request.url.indexOf("?"))).get('name');

  console.log(name)

  response.statusCode = 200;//OK
  response.setHeader('Content-Type', 'text/plain');
  response.end(`Hello ${name}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});