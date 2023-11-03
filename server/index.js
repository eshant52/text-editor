const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

app.post("/", (req, res) => {
  console.log(req.body.frame);
  res.json({ message: "Post request received!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
