const express = require("express");
const router = express.Router();
const {
    getShows,
    postShows,
    putShows,
    deleteShows,
} = require("../controller/showsController");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getShows);

router.post("/", protect, postShows);

router.put("/", protect, putShows);

router.delete("/", protect, deleteShows);

module.exports = router;
