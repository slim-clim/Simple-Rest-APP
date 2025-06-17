let { tracks } = require("../data/data.js");

// GET all tracks
const getTracks = (req, res) => {
  res.json(tracks);
};

// GET single track by ID
const getTrack = (req, res) => {
  const id = parseInt(req.params.id);
  const track = tracks.find((track) => track.id === id);
  if (!track) {
    return res.status(404).json({ error: "track not found" });
  }
  res.json(track);
};

// POST new track
const createTrack = (req, res) => {
  const { name, description, age } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: "name, description required" });
  }
  const newtrack = {
    id: tracks.length + 1,
    name,
    description,
  };
  tracks.push(newtrack);
  res.status(201).json(newtrack);
};

// PUT update track by ID
const updateTrack = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const track = tracks.find((track) => track.id === id);

  if (!track) {
    return res.status(404).json({ error: "track not found" });
  }
  if (!name || !description) {
    return res
      .status(400)
      .json({ error: "name, description, and age are required" });
  }

  track.name = name;
  track.description = description;
  res.json(track);
};

// DELETE track by ID
const deleteTrack = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tracks.findIndex((track) => track.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "track not found" });
  }
  tracks.splice(index, 1);
  res.json({
    message: `track with the id ${id} was deleted successfully`,
  });
};

module.exports = { getTracks, getTrack, createTrack, updateTrack, deleteTrack };
