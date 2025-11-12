import React from "react";
import { Link } from "react-router-dom";

const NoteList = ({ notes, onDelete }) => {
  if (!notes.length) return <p>No notes yet. Add one!</p>;

  return (
    <div className="list-group">
      {notes.map((note) => (
        <div key={note._id} className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{note.title}</h5>
              <p>{note.description}</p>
            </div>
            <div>
              <Link to={`/edit/${note._id}`} className="btn btn-sm btn-outline-secondary me-2">
                Edit
              </Link>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => onDelete(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
