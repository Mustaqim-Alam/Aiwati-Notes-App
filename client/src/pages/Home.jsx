import React, { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import NoteList from "../components/NoteList";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await API.get("/notes");
      setNotes(res.data);
    } catch (err) {
      toast.error("Failed to fetch notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await API.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success("Note deleted successfully");
    } catch {
      toast.error("Failed to delete note");
    }
  };

  return (
    <div>
      <h2>All Notes</h2>
      {loading ? <Loader /> : <NoteList notes={notes} onDelete={handleDelete} />}
    </div>
  );
};

export default Home;
