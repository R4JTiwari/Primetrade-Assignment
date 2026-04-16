const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  getProfile,
  getAllUsers,
  deleteUser
} = require("../controllers/userController");

// User route
router.get("/profile", protect, getProfile);

// Admin routes
router.get("/all", protect, authorizeRoles("admin"), getAllUsers);
router.delete("/:id", protect, authorizeRoles("admin"), deleteUser);

module.exports = router;