// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
//   createdAt: {
//     type: Date,
//     required: true,
//   },
//   updatedAt: {
//     type: Date,
//     required: true,
//   },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
