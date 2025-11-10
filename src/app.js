// Multiple Route Handlers

const express = require('express');
const app = express();

// Multiple Route Handlers

app.get('/user', [
  (req, res, next) => {
    console.log('Handling the route User1');
    next();
    // res.send('Response 1');
  },
  (req, res, next) => {
    console.log('Handling the route User2');
    // res.send('Response 2');
    next();
  },
  (req, res, next) => {
    console.log('Handling the route User3');
    // res.send('Response 3');
    next();
  },
  (req, res, next) => {
    console.log('Handling the route User4');
    // res.send('Response 4');
    next();
  },
  (req, res, next) => {
    console.log('Handling the route User5');
    res.send('Response 5');
  },
]);

app.listen(3000, (req, res) => {
  console.log('Server is listening on port number 3000');
});
