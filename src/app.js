const express = require('express');
const app = express();
const { connectDB } = require('./config/database');
const { User } = require('./models/user');
const { ReturnDocument } = require('mongodb');

// Create a route for user signup

// use express middleware to convert request body from json to js object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', async (req, res, next) => {
  // Logic to signup a user
  // Create a new user instance
  const user = new User(req.body);
  console.log('req.body : ' + req.body);
  //Save the user object into db
  try {
    await user.save();
    res.send('User added successfully');
  } catch (error) {
    res.status(400).send('Error in saving the user : ' + error.message);
  }
});

// 1st case :- Get user using email id or find user using email id

app.get('/user', async (req, res) => {
  //Get user id or field by using which we have to get user record

  if (req.body && req.body.emailId) {
    const userEmail = req?.body?.emailId;
    console.log(req.body.emailId);
    try {
      const user = await User.find({ emailId: userEmail });

      if (!user) {
        res.status(404).send('User not found');
      } else {
        res.send(user);
      }
    } catch {
      (err) => {
        req.send('Something went wrong' + err.message);
      };
    }
  } else {
    res.send('emailID field is not found');
  }
});

app.get('/firstUserInDocument', async (req, res) => {
  //Get user id or field by using which we have to get user record
  try {
    const user = await User.findOne({});

    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.send(user);
    }
  } catch {
    (err) => {
      req.send('Something went wrong' + err.message);
    };
  }
});
// second case 2--Get user using email id or find user using findOne method

app.get('/userOne', async (req, res) => {
  //Get user id or field by using which we have to get user record
  const userEmail = req.body.emailId;
  console.log(req.body.emailId);
  try {
    const user = await User.findOne({ emailId: userEmail });

    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.send(user);
    }
  } catch {
    (err) => {
      req.send('Something went wrong' + err.message);
    };
  }
});

//Find all users
app.get('/feed', async (req, res) => {
  console.log(req.body);
  //Get user id or field by using which we have to get user record
  try {
    const user = await User.find({});

    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.send(user);
    }
  } catch {
    (err) => {
      req.send('Something went wrong' + err.message);
    };
  }
});

// API to delete use id using userId

app.delete('/user', async (req, res) => {
  const userId = req.body.userId;
  try {
    console.log('userId : ' + userId);

    const user = await User.findByIdAndDelete({ _id: userId });
    if (!user) {
      res.status(404).send('User not found');
    } else {
      console.log(user);
      res.send('User deleted successfully');
    }
  } catch {
    (err) => {
      req.status(400).send('Something went wrong' + err.message);
    };
  }
});

// Update or patch user api
app.patch('/user', async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: 'after',
    });
    console.log(user);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      console.log(user);
      res.send('User updated successfully');
    }
  } catch {
    (err) => {
      req.send('Something went wrong' + err.message);
    };
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
