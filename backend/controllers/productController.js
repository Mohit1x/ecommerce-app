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

    // Get the fields from body
    const { name, price, size, description, category, stock, image } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // Check if product exists
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update only if values are provided
    if (name) product.name = name;
    if (price) product.price = price;
    if (size) product.sizes = Array.isArray(size) ? size : size.split(",");
    if (description) product.description = description;
    if (category) product.category = category;
    if (stock !== undefined) product.stock = stock;
    if (image) {
      // If you're sending a new image as base64 and want to re-upload to cloudinary:
      const cloudinary = require("../utils/cloudinary");

      // Optional: delete old image from Cloudinary (if needed)
      // await cloudinary.uploader.destroy(product.image.public_id);

      const uploadRes = await cloudinary.uploader.upload(image, {
        folder: "ecommerce",
      });

      product.image = {
        public_id: uploadRes.public_id,
        url: uploadRes.secure_url,
      };
    }

    await product.save();

    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(404)
        .json({ message: "product with this id not found" });
    }

    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    console.log("error deleting product", error);
    return res.status(500).json({ message: "server error", error });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
