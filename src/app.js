// node js has a http module

//import http module
const http = require('node:http');

//Create server
const server = http.createServer((req, res) => {
  if (req.url === '/getSecretData') {
    res.end('There is no secret data ');
  }
  res.end('Hello World !!!');
});

// Listen to the server
server.listen(3000);
