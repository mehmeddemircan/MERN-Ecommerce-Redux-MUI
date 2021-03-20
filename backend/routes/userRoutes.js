const express = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPasword,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middleware/auth");



const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/profile/me").get(protect,getUserProfile);
router.route("/profile/update").put(protect,updateUserProfile);
  
router.route("/password/forgot").post(forgotPassword);
router.route("/register").post(resetPasword);

module.exports = router;
