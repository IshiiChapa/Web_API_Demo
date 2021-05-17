const express = require("express");
const router = express.Router();
 
const Products = require('../models/itemlistmodel');

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
