const express = require("express");
const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/tracks.js");

const router = express.Router();

// GET all Track
router.get("/", getTracks);

// GET single Track by ID
router.get("/:id", getTrack);

// POST new Track
router.post("/", createTrack);

// PUT update Track by ID
router.put("/:id", updateTrack);

// DELETE Track by ID
router.delete("/:id", deleteTrack);

module.exports = router;
