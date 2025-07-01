const User = require("../models/User");

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, address } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (address) user.address = address;

    await user.save();

    const userResponse = user.toObject();

    delete userResponse.password;

    res.status(200).json({ message: "profile updated", user: userResponse });
  } catch (error) {
    console.log("error updating user :", error);
    res.status(500).json({ message: "server error" });
  }
};

module.exports = { updateProfile };
