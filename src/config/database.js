const mongoose = require('mongoose');
const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://devtinderdb:WeJrsCjWaoNUL4Zg@namastejs.gt7a6rh.mongodb.net/devTinder'
  );
};

module.exports = {
  connectDB,
};
