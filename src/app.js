// Create a server using express

const express = require('express');
const app = express();

app.get('/user/:userId/books/:bookId', (req, res) => {
  console.log(req.params);
  res.send({ firstName: 'Shubhangi', lastName: 'Kumbhar' });
});

app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params);
});

app.get('/platae/:genus.:species', (req, res) => {
  res.send(req.params);
});

//Listen to the server
app.listen(3000, (req, res) => {
  console.log('Server is successfully running on port number 3000');
});
