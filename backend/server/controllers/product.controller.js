var Product = require("../database-mongo/Product.model.js");
var Product = require("../database-mongo/Product.model");
const cloudinary = require("../utils/cloudinary");

var add = function (req, res) {
  let { title, description, image_url, quantite, user_id } = req.body;

  Product.insertMany({ title, description, image_url, quantite, user_id })
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

let addProduct = async (req, res) => {
  const { image } = req.body;
  await cloudinary.uploader.upload(image, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const url = result.secure_url;
      console.log(url);
      res.send(url);

      let product = new Product({
        title: req.body.title,
        image_url: url,
        description: req.body.description,
        quantite: req.body.quantite,
        user_id: req.body.user_id,
      });

      // Save product
      product
        .save()
        .then((product) => {
          res.json(product);
        })
        .catch((err) => console.log(err));
    }
  });
};
module.exports = { add, addProduct };
