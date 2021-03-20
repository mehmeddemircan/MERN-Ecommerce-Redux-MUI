const User = require('../models/User');
const asyncHandler = require('express-async-handler')
const ErrorHandler = require('../utils/errorHandler')
const sendToken = require('../utils/jwtToken')
exports.register = asyncHandler(async (req, res, next) => {
  const {name,email,password} = req.body
 
      const _user = await User.findOne({email})

      if (_user) {
        res.status(400).json({
          success: false,
          error : 'This email already taken '
        })
      }
    
        const user = await User.create({
          name,
          email,
          password,
       
        })  

        sendToken(user,200,res)

 
});
exports.login = asyncHandler(async (req, res, next) => {

    const {email,password} = req.body

    const user = await User.findOne({email}).select("+password")

    // match password
    const isMatched = await user.matchPassword(password)

    if (!isMatched) {
     throw new ErrorHandler('Invalid Email or Password',400)
    }

    sendToken(user,200,res)


    

});
// get user profile private route   => /api/profile/me
exports.getUserProfile = asyncHandler(async (req, res, next) => {

        const user = await User.findById(req.user._id)

        res.status(200).json({
            success: true,
            user
        })


})

// update user profile private route   => /api/profile/update
exports.updateUserProfile = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id)

    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
          user.password = req.body.password
      }

      const updatedUser = await user.save()

      sendToken(updatedUser,200,res)
    }else {
      return next(new ErrorHandler('User not found , not updated '))
    }

})

exports.forgotPassword = async (req, res, next) => {
  res.send("forgot password");
};
exports.resetPasword = async (req, res, next) => {
  res.send("reset password");
};
