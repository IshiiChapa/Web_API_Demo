const Products = require('../models/itemlistmodel'); 
const shortid = require('shortid');
 
 
 exports.createProduct = (req, res) => { 

    res.status(200).json({ file: req.file, body: req.body });
};
      
   