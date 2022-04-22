const mongoose = require("mongoose");
const db = require("./index.js");
const Schema=mongoose.Schema
const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    image_url: String,
    quantite: Number,
    // user_id: String
      comments:[{type:Schema.Types.ObjectId, ref:"Comment"}]
  });
  
  const Product = mongoose.model("Product", ProductSchema);
  
  module.exports = Product;