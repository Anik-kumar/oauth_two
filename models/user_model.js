const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const userSchema = new Schema({
  username: String,
  fullname: String,
  googleId: {
    type: String,
    index: true
  },
  thumbnail: String
});

const User = mongooes.model('user', userSchema);

module.exports = User;