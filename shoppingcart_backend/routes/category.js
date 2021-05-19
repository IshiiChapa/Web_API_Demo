const express = require('express');
const { addCategory, getCategories } = require('../controller/category');
// const { registerValidation, adminMiddleware } = require('../middleware/validation');
const router = express.Router();


router.post('/category/create', addCategory);
router.get('/category/getcategory', getCategories);
 
module.exports = router;