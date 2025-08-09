const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    url: { type: String, required: true },
  },
});

const Category = new mongoose.model("category", categorySchema);

module.exports = Category;
