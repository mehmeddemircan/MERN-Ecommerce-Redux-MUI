const Product = require('../models/Product')
const asyncHandler= require('express-async-handler');
const ErrorHandler = require('../utils/errorHandler');
const products = require('../data/products');

// Get all products => /api/products
exports.getAllProducts = asyncHandler ( async(req,res,next)=> {

    const pageSize  = 6 ; 
    const page  =Number( req.query.pageNumber) || 1


    const keyword = req.query.keyword ? {
        name : {
            $regex : req.query.keyword,
            $options : 'i'
        }
    } : {}

    const count = await Product.countDocuments({...keyword})

    const products = await Product.find({...keyword}).limit(pageSize).skip(pageSize * (page-1))

    if (products) {
        res.status(200).json({
            success: true,
            products,
            page,
            pages : Math.ceil(count / pageSize)
        })
    }else {
        return next(new ErrorHandler('Products not found , Something went wrong',404))
    }

})

// Get single product => /api/product/:id
exports.getSingleProduct = asyncHandler (async(req,res,next)=> {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.status(200).json({
            success: true,
            product
            
        })
    }else {
        return next(new ErrorHandler('Product not found , Something went wrong',404)) // we can use it throw new ErrorHandler() instead of next
    }

})

// create new review => /api/product/:id/reviews  => private route
exports.createProductReview = asyncHandler (async(req,res,next)=> {

    const {rating , comment } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        const alreadyReviewed = product.reviews.find(r => r.user.toString()=== req.user._id.toString())

    

        if (alreadyReviewed) {
            return next(new ErrorHandler('Product already reviewed',400))
        }
     
        const review = {
            name: req.user.name,
            rating : Number(rating),
            comment ,
            user : req.user._id
        }
   
        product.reviews.push(review)
 
        product.numReviews = product.reviews.length
     
        product.rating = product.reviews.reduce((acc,item)=> item.rating + acc ,0) / product.reviews.length
     
        await product.save()
       
        res.status(201).json({
            message: 'Review added successfully'
        })

    }else {
        return next(new ErrorHandler('Product not found , Something went wrong',404)) // we can use it throw new ErrorHandler() instead of next
    }

})