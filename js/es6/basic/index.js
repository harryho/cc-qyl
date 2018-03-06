const http = require('http');
const { URL, URLSearchParams } = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on('error', (err) => {
    console.error(err);
  });
  if (req.method === 'GET' && req.url==='/' ) {
    // params = new URLSearchParams('user=abc&query=xyz');
    console.log(req)
    // res.('utf8');
    res.write("Hello World !");
    res.end();

  }
 else if (req.method === 'GET' && req.url.startsWith('/hi') ) {
   // http://localhost:3000/hi?name=John -- Display Hello John
    const name = new URLSearchParams(req.url.substring(req.url.indexOf("?"))).get('name');
    res.write(` <h1 style="color:blue;">Hello ${name} </h1>`);
    res.end();
  }
  else if (req.method === 'POST' && req.url === '/echo') {
    req.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});