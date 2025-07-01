const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  getMe,
} = require("../controllers/AuthController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getMe", getMe);

module.exports = router;
