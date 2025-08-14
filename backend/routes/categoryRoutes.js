const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");

const {
  createCategory,
  getAllCategories,
} = require("../controllers/CategoryController");
const { upload } = require("../config/upload");
const uploadToCloudinary = require("../middlewares/categoryImage");

router.post(
  "/",
  upload.single("image"),
  requireAuth,
  uploadToCloudinary,
  createCategory
);
router.get("/", getAllCategories);

module.exports = router;
