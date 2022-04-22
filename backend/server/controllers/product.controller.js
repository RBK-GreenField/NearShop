var Product = require('../database-mongo/Product.model.js');

var add = function (req, res){
    let {title,description,image_url,quantite,user_id}=req.body
  
    Product.insertMany({title,description,image_url,quantite,user_id})
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  }
module.exports = { add };