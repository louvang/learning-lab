const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add your name'],
    },
    email: {
      type: String,
      required: [true, 'Please add your email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  { timestampes: true }
);

module.exports = mongoose.model('User', userSchema);