const { cloudinary } = require("../config/upload");

const uploadToCloudinary = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const base64Image = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "categories",
    });

    console.log(result, "clodunary result");

    req.image = {
      image: result.secure_url,
      public_id: result.public_id,
    };

    console.log(req.image, "req.image url");

    next();
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ message: "Image upload failed", error });
  }
};

module.exports = uploadToCloudinary;
