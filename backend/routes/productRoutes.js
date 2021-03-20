const express = require('express');

const {getAllProducts, getSingleProduct, createProductReview} = require('../controllers/productController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/products').get(getAllProducts)
router.route('/product/:id').get(getSingleProduct)
router.route('/product/:id/reviews').post(protect,createProductReview)

module.exports = router;