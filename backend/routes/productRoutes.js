const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");
const requireAuth = require("../middlewares/requireAuth");
const requireAdmin = require("../middlewares/requireAdmin");
const upload = require("../middlewares/upload");

router.get("/getAll", getAllProducts);

// Create product (Admin only)
router.post(
  "/create",
  requireAuth,
  requireAdmin,
  upload.single("image"),
  createProduct
);

module.exports = router;
