const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const addressRoutes = require("./routes/addressRoutes");
const CategoryRoutes = require("./routes/categoryRoutes");

connectDb();
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

console.log(process.env.FRONTEND_URL);

app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", CategoryRoutes);

app.get("/", (req, res) => {
  res.json({ message: "E-commerce API is running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
