const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    console.log("=== Request Debug Info ===");
    console.log("Request body:", JSON.stringify(req.body, null, 2));
    console.log("Request file:", req.file);
    console.log("Body keys:", Object.keys(req.body));
    console.log("Body values:", Object.values(req.body));
    console.log("========================");

    const { name, price, sizes, description, category, stock } = req.body;

    // Validate required fields
    if (!name || !price || !description) {
      return res.status(400).json({
        message: "Name, price, and description are required",
        received: { name, price, description },
      });
    }

    // Validate image upload
    if (!req.file) {
      return res.status(400).json({ message: "Product image is required" });
    }

    // Process sizes - handle both string and array
    let processedSizes = [];
    if (sizes) {
      if (typeof sizes === "string") {
        processedSizes = sizes.split(",").map((size) => size.trim());
      } else if (Array.isArray(sizes)) {
        processedSizes = sizes;
      }
    }

    // Create product with Cloudinary image data
    const newProduct = await Product.create({
      name,
      price: Number(price),
      sizes: processedSizes,
      description,
      category: category || "uncategorized",
      stock: Number(stock) || 0,
      image: {
        public_id: req.file.filename, // Cloudinary public_id
        url: req.file.path, // Cloudinary secure_url
      },
      rating: 0,
      reviews: [],
    });

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
};
