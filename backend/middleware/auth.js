const jwt = require('jsonwebtoken')
const User = require('../models/User')
const ErrorHandler = require('../utils/errorHandler')
const asyncHandler = require('express-async-handler')


exports.protect = asyncHandler(async(req,res,next)=> {

    let token ; 

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
     
            try {
                
                token = req.headers.authorization.split(' ')[1]


                const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
                req.user = await User.findById(decoded.id)

                next()
        

            } catch (error) {
                return next(new ErrorHandler('Not authorized to access this route',400))           
            }

    }



       
       




})
