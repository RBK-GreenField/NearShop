const mongoose = require("mongoose");
const db = require("./index.js");

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    image_url: String,
    quantite: Number,
    user_id: String,
  });
  
  const Product = mongoose.model("Product", ProductSchema);
  
  module.exports = Product;