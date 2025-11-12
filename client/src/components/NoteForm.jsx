import React, { useState } from "react";

const NoteForm = ({
  onSubmit,
  initialData = { title: "", description: "" },
  isSubmitting,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          rows="4"
        />
      </div>

      <button
        type="submit"
        className="btn "
        style={{ backgroundColor: "#faae2b", textColor: "#00473e" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Saving..." : "Save Note"}
      </button>
    </form>
  );
};

export default NoteForm;
