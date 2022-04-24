const router = require('express').Router();
const productController = require("../controllers/product.controller");


router.post("/add",productController.add) 
router.delete("/deleteProduct/:id",productController.deleteProduct)
router.put("/updateProduct/:id",productController.updateProduct)


module.exports = router;