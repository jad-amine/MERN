const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

// Express app
const app = express();
const workoutRoutes = require("./routes/workouts");
app.use(express.json());

// Routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening to port 4000");
    });
  })
  .catch((err) => console.log(err));
