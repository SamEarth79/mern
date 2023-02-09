const express = require("express");
const router = express.Router();
const { getShows } = require("../controller/apiController");

router.get("/", getShows);

module.exports = router;
