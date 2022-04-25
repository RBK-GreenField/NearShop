const mongoose = require("mongoose");
const db = require("./index.js");
const Schema=mongoose.Schema
const CommentSchema = new mongoose.Schema({
   
    description: String,
    product_id: String,
    user_id: String
  });
  
  const Comment = mongoose.model("Comment", CommentSchema);
  
  module.exports = Comment;