const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDb();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "its test api" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is runnning on ${PORT}`);
});
