const Note = require("../../../models/note.model");

// ✅ Create a new note
const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }

    const newNote = new Note({
      title,
      description,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Get all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Get a single note by ID
const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Update a note
const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, description, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Delete a note
const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
