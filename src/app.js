const express = require('express');
const app = express();

app.use('/', (err, req, res, next) => {
  if (err) {
    res.status(500).send('Something went wrong');
  }
});

app.get('/getUserData', (req, res) => {
  //   try {
  throw new Error('fhgfgzgagghaj');
  res.send('User Data sent');
  //   } catch (err) {
  //     res.status(500).send('Something went wrong.Please contact to support team');
  //   }
});

//Always keep this wild card error handling function at the end of the application
app.use('/', (err, req, res, next) => {
  if (err) {
    res.status(500).send('Something went wrong1');
  }
});
app.listen(3000, (req, res) => {
  console.log('Server is listening on port number 3000');
});
