const User = require("../models/User");

// Logged-in user profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json({
      message: "Profile fetched",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Admin: get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      count: users.length,
      users
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Admin: delete user
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "User deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getProfile,
  getAllUsers,
  deleteUser
};