const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    // minLength: 4,
    // maxLength: 50,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    // lowercase: true,
    // trim: true,
    // minLength: 5,
    // maxLength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    // min: 18,
  },
  gender: {
    type: String,
    // validate(value) {
    //   if (!['male', 'female', 'other'].includes(value)) {
    //     throw new Error('Gender data is not valid');
    //   }
    // },
  },
  about: {
    type: String,
  },
  // photoUrl: {
  //   type: String,
  //   default:
  //     'https://tse4.mm.bing.net/th/id/OIP.PkrwrLwaq68CaqLPn7jBIwHaHa?pid=Api&P=0&h=180',
  // },
  // skills: {
  //   type: [String],
  // },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
