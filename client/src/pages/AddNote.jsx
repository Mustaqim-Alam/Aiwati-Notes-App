import React, { useState } from "react";
import NoteForm from "../components/NoteForm";
import API from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddNote = () => {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      await API.post("/notes", data);
      toast.success("Note added successfully");
      navigate("/");
    } catch {
      toast.error("Failed to add note");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Add Note</h2>
      <NoteForm onSubmit={handleSubmit} isSubmitting={submitting} />
    </div>
  );
};

export default AddNote;
