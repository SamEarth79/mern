const express = require("express");
const {
    register,
    login,
    getMyShows,
} = require("../controller/usersController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.post("/", register);
router.post("/login", login);
router.get("/me", protect, getMyShows);

module.exports = router;
