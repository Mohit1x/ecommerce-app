const { urlencoded } = require("express");
const User = require("../models/User");

const addAddress = async (req, res) => {
  try {
    const { street, city, state, postalCode, country, isDefault } = req.body;
    const { userId } = req.user;

    if (!street || !city || !state || !postalCode || !country) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findById(userId);
    if (isDefault) {
      user.address.forEach((add) => {
        add.isDefault = false;
      });
    }
    user.address.push({ street, city, state, postalCode, country, isDefault });
    await user.save();

    res
      .status(201)
      .json({ message: "Address added", addresses: user.addresses });
  } catch (error) {
    console.log("error adding address", error);
    res.status(500).json({ message: "Server error", error: error });
  }
};

const updateAddress = async (req, res) => {
  try {
    const update = req.body;
    const { id } = req.params;
    const { userId } = req.user;

    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    const user = await User.findById(userId);
    const address = await user.address.id(id);

    if (!address) {
      return res.status(404).json({ message: "address not found" });
    }

    if (update.isDefault) {
      user.address.forEach((add) => {
        add.isDefault = false;
      });
    }

    Object.assign(address, update);
    await user.save();

    res.status(200).json({ message: "address updated", address: address });
  } catch (error) {
    console.log(error, "error updating user address");
    res.status(500).json({ message: "server error", error });
  }
};

const getAllAddress = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await User.findById(userId);

    res
      .status(200)
      .json({ message: "addresss fond", addressess: user.address });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error: error });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    const user = await User.findById(userId);
    user.address = user.address.filter((add) => add._id.toString() !== id);

    await user.save();
    res
      .status(200)
      .json({
        message: "Address deleted successfully",
        addresses: user.address,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error: error });
  }
};

module.exports = { addAddress, updateAddress, getAllAddress, deleteAddress };
