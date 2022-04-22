const mongoose = require("mongoose");
const db = require("./index.js");
const Schema=mongoose.Schema
const CommentSchema = new mongoose.Schema({
   
    description: String,
    // product_id: String,
    // user_id: String
    user:{
      type: Schema.Types.ObjectId, ref: 'User'
      
    }
      
  });
  
  const Comment = mongoose.model("Comment", CommentSchema);
  
  module.exports = Comment;