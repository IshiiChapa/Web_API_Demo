const express = require('express');
const { addItemToCart } = require('../controller/cart');
// const { registerValidation, adminMiddleware } = require('../middleware/validation');
const router = express.Router();


router.post('/cart/addtocart', addItemToCart);

 
module.exports = router; 