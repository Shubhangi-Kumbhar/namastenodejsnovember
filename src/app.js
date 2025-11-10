// Create a server using express

const express = require('express');
const app = express();

//Listen to the server
app.listen(7777, (req, res) => {
  res.send('Hello World from express server :)');
  console.log('Server is successfully running on port number 7777');
});
