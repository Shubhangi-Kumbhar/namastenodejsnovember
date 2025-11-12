const express = require('express');
const app = express();
const { connectDB } = require('./config/database');
const { User } = require('./models/user');

// Create a route for user signup

// use express middleware to convert request body from json to js object
app.use(express.json());

app.post('/signup', async (req, res, next) => {
  // Logic to signup a user

  // Create a new user instance
  const user = new User(req.body);
  //Save the user object into db
  try {
    await user.save();
    res.send('User added successfully');
  } catch (error) {
    res.status(400).send('Error in saving the user : ' + error.message);
  }
});

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
