const express = require('express');
const { addCategory, getCategories } = require('../controller/category');
// const { registerValidation, adminMiddleware } = require('../middleware/validation');
const router = express.Router();


router.post('/category/create', addCategory);
router.get('/category/getcategory', getCategories);

router.put('/category/:categoryId/:userId', requireSignin, isAdmin, isAdmin, update);

router.delete('/category/:categoryId/:userId', requireSignin, isAdmin, isAdmin, remove);

router.get('/categories', list);

router.param('categoryId', categoryById);

router.param('userId', userById);
 
module.exports = router;