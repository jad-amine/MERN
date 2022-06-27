const express = require("express");
require("dotenv").config();

// Express app
const app = express();
const workoutRoutes = require("./routes/workouts");
app.use(express.json());

// Routes
app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log("listening to port 4000");
});
