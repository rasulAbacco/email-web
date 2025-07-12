const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getProfile,
} = require("../controller/userControllers");
const protect = require("../middlewares/authMiddlewares");

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private Route
router.get("/me", protect, getProfile);

module.exports = router;
