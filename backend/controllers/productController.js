const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
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

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res
      .status(200)
      .json({ message: "getting products successfully", products: products });
  } catch (error) {
    console.log("error getting all products", error);
    res.status(500).json({ message: "server error", error });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "product id is required" });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "product with this id not found" });
    }

    res.status(200).json({ message: "prduct found successfully", product });
  } catch (error) {
    console.log("error getting product", error);
    res.status(500).json({ message: "server error", error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, price, sizes, description, category, stock } = req.body;
  } catch (error) {
    console.log("error updating product", error);
    res.status(500).json({ message: "server error", error });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
