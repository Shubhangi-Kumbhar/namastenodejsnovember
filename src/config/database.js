const mongoose = require('mongoose');
const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://devtinderdb:OPb1juv93evYbqdM@namastejs.gt7a6rh.mongodb.net/devTinder'
  );
};

module.exports = {
  connectDB,
};
