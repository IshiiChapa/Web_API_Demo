const express = require("express");
const router = express.Router();

const Products = require("../models/itemlistmodel");

router.get("/", async (req, res) => {
  try {
    let product = await Products.find();
    if (!product) {
      return res.status(404).send("Product not found");
    } else {
      return res.status(200).send(product);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//get products with id
router.get("/:productId", async (req, res) => {
  try {
    let product = await Products.findById(req.params.productId);

    if (!product) {
      res.status(404).send("the givven id dose not in our server");
    } else {
      return res.status(200).send(product);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//Edit products 
router.put("/:productId", async (req, res) => {
  try {
    let product = await Products.findOneAndUpdate(
      { _id: req.params.productId },
      {
        $set: {
          name: req.body.name,
          discription: req.body.discription,
          price: req.body.price,
          imgURL: req.body.imgURL,
        },
      },

      { new: true, useFindAndModify: false }
    );
    if (!Products) {
      return res.status(400).send("Not all madatary values have benn set !"); //validations
    }
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

// Add products 
router.post("/", async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Not all madatary values have benn set !"); //validations
  }
  try {
    let productAddedToDb = new Products({
      name: req.body.name,
      discription: req.body.discription,
      price: req.body.price,
      imgURL: req.body.imgURL,
    });
    let productToAdded = await productAddedToDb.save();
    res.send(productToAdded);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

 
// delete products
router.delete("/:productId", async (req, res, next) => {
    try {
      let productId = await Products.findOneAndDelete({
        _id: req.params.productId,
      });
      if (!productId) {
        throw createError(404, "The given id does not exist");
      }
      res.send(productId);
    } catch (e) {
        return res.status(500).send(e.message);
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
