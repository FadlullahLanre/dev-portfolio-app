const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = 'localhost';

const home = fs.readFileSync("./views/home.html", "utf-8")
const about = fs.readFileSync("./views/about.html", "utf-8")
const contact = fs.readFileSync("./views/contact.html", "utf-8")

const server = http.createServer(serverHandler);

function serverHandler(req, res) {

  if (req.method == 'GET' && req.url == '/') {
    res.writeHead(200, { "Content-type": "text/html" })
    res.end(home)
  }
  else if (req.method == 'GET' && req.url == '/home') {
    res.writeHead(200, { "Content-type": "text/html" })
    res.end(home)
  }
  else if (req.method == 'GET' && req.url == '/about') {
    res.writeHead(200, { "Content-type": "text/html" })
    res.end(about)
  }
  else if (req.method == 'GET' && req.url == '/contact') {
    res.writeHead(200, { "Content-type": "text/html" })
    res.end(contact)
  }
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Portfolio app"
    })
    res.end("<h1>Page Not Found</h1>")
  }
}
  

server.listen(port, hostname, () => {
  console.log(`Server is listening at ${hostname}:${port}... `);
})