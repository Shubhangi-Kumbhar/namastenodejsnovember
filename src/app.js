const express = require('express');
const app = express();
const { connectDB } = require('./config/database');

connectDB()
  .then(() => {
    console.log('Database connection is estalished..');
    app.listen(3000, (req, res) => {
      console.log('Server is listening on port number 3000');
    });
  })
  .catch((err) => {
    console.log('Database connection can not be established...');
  });
