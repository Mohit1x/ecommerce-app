const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password, role, address } = req.body;
    if (!name || !email || !password) {
      return res.status(409).json({ message: "All fields are requried" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be of atleast 6 characters" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(401)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
      address: address || [],
    });

    const userResponse = user.toObject();
    delete userResponse.password;

    res
      .status(201)
      .json({ message: "user registered sucessfully", user: user });
  } catch (error) {
    console.log("error during registration :", error);
    res.status(500).json({ message: "server error", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(409).json({ message: "all fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const userResponse = user.toObject();
    delete userResponse.password;

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ message: "Login successful", user: userResponse });
  } catch (error) {
    console.log("error during login :", error);
    res.status(500).json({ message: "server error", error: error });
  }
};

module.exports = { register, login };
