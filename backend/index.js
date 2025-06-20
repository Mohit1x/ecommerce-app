const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

dotenv.config();
connectDb();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is runnning on ${PORT}`);
});
