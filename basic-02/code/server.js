const http = require("http");
var fs = require("fs");

const { URL, URLSearchParams } = require("url");

const hostname = "test.nodeapp.hh";
const port = 4000;

const server = http.createServer((request, response) => {
  request.on("error", err => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  response.on("error", err => {
    console.error(err);
  });

  const name = new URLSearchParams(
    request.url.substring(request.url.indexOf("?"))
  ).get("name");

  if (request.url.startsWith("/hi?")) {
    response.statusCode = 200; //OK
    response.setHeader("Content-Type", "text/plain");
    response.end(`Hello ${name}`);
  }

  else if (request.url.startsWith("/index.html?")) {
    console.log(name, request.url);
    fs.readFile("index.html", "utf8", (err, data) => {
      const result = data.replace(/\$name\$/g, name);

      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(result);
      response.end();
    });
  }
  else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write('page not found');
    response.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
