const express = require("express");
const {
  register,
  login,
  getUserProfile,
  logout,
  updateProfile,
} = require("../controllers/user.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");
const upload = require("../utils/multer");

const router = express.Router();

// user register route
// router.route('/register').post(register);
router.post("/register", register);

// route for user login
router.post("/login", login);

// route for user LogOut
router.get("/logout", logout);

// route for user profile
router.get("/profile", isAuthenticated, getUserProfile);

// route for update user profile
router.put(
  "/profile/update",
  isAuthenticated,
  upload.single("profilePhoto"),
  updateProfile
);

module.exports = router;
