const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
connectDb();

const app = express();

app.use(cookieParser());
app.use(express.json());

console.log("CLOUDINARY API KEY:", process.env.CLOUDINARY_API_KEY);

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "its test api" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is runnning on ${PORT}`);
});
