const express = require("express");
const router = express.Router();

const { createProduct } = require("../controllers/productController");
const requireAuth = require("../middlewares/authMiddleware");
const requireAdmin = require("../middlewares/admin");
const upload = require("../middlewares/upload");

router.post(
  "/create",
  requireAuth,
  requireAdmin,
  upload.single("image"),
  createProduct
);

module.exports = router;
