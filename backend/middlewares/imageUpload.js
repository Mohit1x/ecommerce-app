const { cloudinary, upload } = require("../config/upload");

const uploadImagesToCloudinary = async (req, res, next) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No images provided" });
    }

    const imageUrls = [];

    for (const file of files) {
      const url = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "ecommerce" },
          (error, result) => {
            if (error) {
              console.error("Upload error:", error);
              return reject(error);
            }
            resolve(result.secure_url);
          }
        );

        stream.end(file.buffer);
      });

      imageUrls.push(url);
    }

    req.imageUrls = imageUrls;
    next();
  } catch (err) {
    console.error("Upload failed:", err);
    res.status(500).json({ error: "Image upload failed" });
  }
};

module.exports = [upload.array("images", 4), uploadImagesToCloudinary];
