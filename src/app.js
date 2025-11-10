// Create a server using express

const express = require('express');
const app = express();

app.get('/user/:userId/:name/:password', (req, res) => {
  console.log(req.params);
  res.send({ firstName: 'Shubhangi', lastName: 'Kumbhar' });
});

//Listen to the server
app.listen(3000, (req, res) => {
  console.log('Server is successfully running on port number 3000');
});
