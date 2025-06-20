const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo db connected");
  } catch (error) {
    console.log("error connecting mongo", error);
    process.exit(1);
  }
};

module.exports = connectDb;
