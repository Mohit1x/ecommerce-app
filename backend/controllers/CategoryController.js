const Category = require("../models/Category");

const createCategory = async (req, res) => {
  try {
    const { image } = req.image;
    const { name } = req.body;

    console.log(req.image, "image url");
    console.log(image, "image console");

    if (!name || !req.image) {
      return res.status(400).json({ message: "Name and image are required" });
    }

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res
        .status(409)
        .json({ message: "category with this name already exist" });
    }

    const category = new Category({
      name: name,
      image: {
        url: image,
      },
    });
    await category.save();

    res.status(201).json({ message: "category created", category: category });
  } catch (error) {
    console.log(error, "error creating category");
    return res.status(500).json({ message: "server error", error });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.status(200).json({ message: "all categories", allCategories });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createCategory, getAllCategories };
