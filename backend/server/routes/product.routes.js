const router = require('express').Router();
const productController = require("../controllers/product.controller");
var Product = require('../database-mongo/Product.model');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");


router.post("/add",productController.add);
router.post("/addimage", upload.single("image"), async (req, res) => {
    try {
      console.log(req.file,'req file')
      console.log(req.body,'req body')
      // Upload image to cloudinary req.file.path
      
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result,'result')
      // Create new user
      let product = new Product({
        title:req.body.title,
        image_url: result.secure_url,
        description : req.body.description,
        quantite: req.body.quantite,
        user_id: req.body.user_id
      });
      
      // Save user
      await product.save();
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  });


module.exports = router;