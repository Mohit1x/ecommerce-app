const express = require("express");
const router = express.Router();

const {
  updateProduct,
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
} = require("../controllers/productController");
const requireAuth = require("../middlewares/requireAuth");
const requireAdmin = require("../middlewares/requireAdmin");
const upload = require("../middlewares/upload");

router.get("/getAll", getAllProducts);
router.get("/single/:id", getProductById);

// Create,update,delete product (Admin only)
router.post(
  "/create",
  requireAuth,
  requireAdmin,
  upload.single("image"),
  createProduct
);
router.put("/update/:id", requireAuth, requireAdmin, updateProduct);
router.delete("/delete/:id", requireAuth, requireAdmin, deleteProduct);

module.exports = router;
