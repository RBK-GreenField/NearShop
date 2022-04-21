const mongoose = require("mongoose");
const db = require("./index.js");

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: {unique: true,
    type: String}
    
});

const User = mongoose.model("User", UserSchema);

module.exports = User;