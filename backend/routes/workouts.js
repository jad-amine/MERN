const express = require("express");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "get all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "get a single workout" });
});

// Post a new workout
router.post("/", (req, res) => {
  res.json({ msg: "post new workout" });
});

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;
