const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const { name, price, size, description, category, stock } = req.body;

    if (!name || !price || !size || !description) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }

    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "Product image is required" });
    }

    const image = req.file.path;

    const newProduct = await Product.create({
      name,
      price,
      size: Array.isArray(size) ? size : size.split(","),
      description,
      category,
      stock,
      image,
      rating: 0,
      reviews: [],
    });

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    // console.error("Create Product Error:", error);
    // res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  createProduct,
};
