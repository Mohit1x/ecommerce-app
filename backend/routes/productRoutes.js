const express = require("express");
const router = express.Router();

const { createProduct } = require("../controllers/productController");
const requireAuth = require("../middlewares/requireAuth");
const requireAdmin = require("../middlewares/requireAdmin");
const upload = require("../middlewares/upload");

// Create product (Admin only)
router.post(
  "/create",
  requireAuth,
  requireAdmin,
  upload.single("image"),
  createProduct
);

module.exports = router;
