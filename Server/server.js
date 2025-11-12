const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noteRoutes = require("./src/routes/notes.routes");
require("dotenv").config();

const app = express();

//  Middleware
app.use(cors());
app.use(express.json());

//  Simple logger middleware (placed before routes)
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

//  Routes
app.use("/notes", noteRoutes);

//  MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/notes_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error(" MongoDB connection error:", err));

//  404 route for unmatched endpoints
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

//  Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
