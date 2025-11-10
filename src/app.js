// Create a server using express

const express = require('express');
const app = express();

//Handle Routes

// handling specific test route
app.use('/test', (req, res) => {
  res.send('Hello from test route');
});

app.use('/namaste', (req, res) => {
  res.send('Namaste from server');
});

app.use('/hello', (req, res) => {
  res.send('Hello from the server');
});

app.use('/hi', (req, res) => {
  res.send('Hi from the server');
});

// app.use((req, res) => {
//   res.send('Hello from express js server');
// });

//Listen to the server
app.listen(3000, (req, res) => {
  console.log('Server is successfully running on port number 3000');
});
