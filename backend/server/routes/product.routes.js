const router = require('express').Router();
const productController = require("../controllers/product.controller");


router.post("/add",productController.add) 


module.exports = router;