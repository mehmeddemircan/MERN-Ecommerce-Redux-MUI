const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,    
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  isAdmin : {
    type: Boolean,
    required: true,
    default: false 
  }
  
}, {timestamps:true});

// Encrypting password before saving user
userSchema.pre('save', async function(next){
    
  if (!this.isModified('password')) {
      next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)


})

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
// Return jwt token 
userSchema.methods.getJwtToken = function () {
  return jwt.sign({id: this._id},process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRE
  })
}
 

module.exports = mongoose.model("User", userSchema);
