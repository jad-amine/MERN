const express = require("express");
require("dotenv").config();
// Express app
const app = express();

// Routes
app.get('/', (req, res) => {
  res.json({msg: 'welcome'})
})

app.listen(process.env.PORT, () => {
  console.log("listening to port 4000");
});
