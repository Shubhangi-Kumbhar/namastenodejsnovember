// Multiple Route Handlers

const express = require('express');
const app = express();

// Middleware chaining

app.get('/user', (req, res, next) => {
  console.log('Handling the request User1');
  next();
});

app.get('/user', (req, res, next) => {
  console.log('Handling the request User2');
  res.send('Response 2');
});

app.listen(3000, (req, res) => {
  console.log('Server is listening on port number 3000');
});
