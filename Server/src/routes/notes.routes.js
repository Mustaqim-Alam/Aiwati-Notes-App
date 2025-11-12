const express = require("express");
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("./controller/notes.controller");

const router = express.Router();

router.post("/", createNote);     // POST /notes
router.get("/", getNotes);        // GET /notes
router.get("/:id", getNoteById);  // GET /notes/:id
router.put("/:id", updateNote);   // PUT /notes/:id
router.delete("/:id", deleteNote);// DELETE /notes/:id

module.exports = router;
