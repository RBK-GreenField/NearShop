const router = require("express").Router();
const productController = require("../controllers/product.controller");


router.post("/add", productController.add);
router.post("/addproduct", productController.addProduct);

module.exports = router;
