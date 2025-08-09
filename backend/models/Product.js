const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: [
      {
        url: { type: String, required: true },
      },
    ],
    description: {
      type: String,
      required: true,
    },
    sizes: [{ type: String }],
    price: {
      type: Number,
      required: true,
    },
    compareAtPrice: {
      type: Number,
    },
    reviews: [reviewSchema],
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
