const router = require('express').Router();
const cartController = require("../controllers/cart.controller");

router.post('/addCart',cartController.addCart);
router.put('/addToCart/:id',cartController.addToCart); 


module.exports = router