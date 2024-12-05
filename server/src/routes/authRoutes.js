const express = require("express");
const {
  signup,
  login,
  getMe,
  logout,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authMiddleware, getMe);
router.post("/logout", logout);

module.exports = router;
