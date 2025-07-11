const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const {
  addAddress,
  updateAddress,
  getAllAddress,
  deleteAddress,
} = require("../controllers/AddressController");

router.post("/add", requireAuth, addAddress);
router.put("/update/:id", requireAuth, updateAddress);
router.get("/get", requireAuth, getAllAddress);
router.delete("/delete/:id", requireAuth, deleteAddress);

module.exports = router;
