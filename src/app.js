// Create a server using express

const express = require('express');
const app = express();

//Handle Routes

// handling specific test route

// Get the data from database
app.get('/user', (req, res) => {
  res.send({ firstName: 'Shubhangi', lastName: 'Kumbhar' });
});

//Saving data to the database
app.post('/user', (req, res) => {
  res.send('Data successfully saved to database');
});

//Delete the data from database
app.delete('/user', (req, res) => {
  res.send('Deleted data from database');
});

//Generic route must be written at last // all the specific get , post, delete routes should be placed before generic route
app.use('/user', (req, res) => {
  res.send('HAHAHAHAHAHA');
});

//Listen to the server
app.listen(3000, (req, res) => {
  console.log('Server is successfully running on port number 3000');
});
