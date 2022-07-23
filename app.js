const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = 3000;
const hostname = 'localhost';

// createServer is an http method used to create a web server that takes a callback function

const httpServer = http.createServer(serverHandler);


  // callback function definition

  function serverHandler(req, res)  {




// Get method for index.html route

    if(req.method === 'GET' && req.url === '/') {
      let filePath = path.resolve(__dirname, 'routes/index.html')
      let fileExists = fs.existsSync(filePath);

    // if route doesn't exist, return error...
      if (!fileExists) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
          <html>
            <body>
              <h3>Page not found</h3>
            </body>
          </html>`)

          // if route exist, return the specified route.
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      }
    }

    // Get method for about.html route
    
    if(req.method === 'GET' && req.url === '/about.html') {
      let filePath = path.resolve(__dirname, 'routes/about.html')
      let fileExists = fs.existsSync(filePath);
      if (!fileExists) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
          <html>
            <body>
              <h3>Page not found</h3>
            </body>
          </html>`)
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      }
    }

    // Get method for the contact.html route

    if(req.method === 'GET' && req.url === '/contact.html') {
      let filePath = path.resolve(__dirname, 'routes/contact.html')
      let fileExists = fs.existsSync(filePath);
      if (!fileExists) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
          <html>
            <body>
              <h3>Page not found</h3>
            </body>
          </html>`)
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      }
    }

    // Get method for home.html route

    if(req.method === 'GET' && req.url === '/home.html') {
      let filePath = path.resolve(__dirname, 'routes/home.html')
      let fileExists = fs.existsSync(filePath);
      if (!fileExists) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
          <html>
            <body>
              <h3>Page not found</h3>
            </body>
          </html>`)
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      }
    }
  }

  // httpServer.listen method that takes the PORT number, and hostname already defined, and prints a Server running statement.

  httpServer.listen(PORT, hostname, () => {
      console.log(`Server running at ${hostname}:${PORT}`);


  })