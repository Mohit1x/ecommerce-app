const express = require("express");
const router = express.Router();

const {
  updateProduct,
  createProduct,
  getAllProducts,
  getProductById,
  getProductByCategory,
  deleteProduct,
} = require("../controllers/productController");
const requireAuth = require("../middlewares/requireAuth");
const requireAdmin = require("../middlewares/requireAdmin");
const upload = require("../middlewares/upload");

router.get("/getAll", getAllProducts);
router.get("/single/:id", getProductById);
router.get("/byCategory/:category", getProductByCategory);

// Create,update,delete product (Admin only)
router.post(
  "/create",
  requireAuth,
  requireAdmin,
  upload.array("images", 5),
  createProduct
);
router.put("/update/:id", requireAuth, requireAdmin, updateProduct);
router.delete("/delete/:id", requireAuth, requireAdmin, deleteProduct);

module.exports = router;
