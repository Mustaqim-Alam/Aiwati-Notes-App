import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import API from "../api/axiosConfig";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await API.get(`/notes/${id}`);
        setNote(res.data);
      } catch {
        toast.error("Failed to fetch note");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      await API.put(`/notes/${id}`, data);
      toast.success("Note updated successfully");
      navigate("/");
    } catch {
      toast.error("Failed to update note");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loader />;
  if (!note) return <p>Note not found.</p>;

  return (
    <div>
      <h2>Edit Note</h2>
      <NoteForm onSubmit={handleSubmit} initialData={note} isSubmitting={submitting} />
    </div>
  );
};

export default EditNote;
