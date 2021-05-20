const express = require("express");
const router = express.Router();
 // const { registerValidation, adminMiddleware } = require('../middleware/validation');
const Product = require('../models/product');
const { createProduct } = require('../controller/product');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');


router.get("/", async (req, res) =>{
    try {
        let product = await Products.find();
        if (!product) {
            return res.status(404).send("Product not found")
        } else {
            return res.status(200).send(product)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

const storage  = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
   
  const upload = multer({ storage });

router.post('/product/create', upload.array('productPicture'),createProduct);
//router.get('/category/getcategory', getCategories);


// router.post("/", async (req, res) => {
//  let user = await Product.find({ 
//      productname: req.body.productname,
//      discription: req.body.discription,
//      price: req.body.price,
//      producticon: req.body.producticon,
//  });
//  return res.status(200).send(user);
// });
 
module.exports = router;
