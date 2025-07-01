const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/authMiddleware");
const { updateProfile } = require("../controllers/userController");

router.put("/profile", requireAuth, updateProfile);

module.exports = router;
    