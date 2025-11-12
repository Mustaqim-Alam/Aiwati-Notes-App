import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#00473e", textColor: "#00473e" }}>
    <div className="container">
      <Link className="navbar-brand font-bold " to="/">Aiwati Notes App</Link>
      <div>
        <Link className="btn btn-outline-light" to="/add">Add Note</Link>
      </div>
    </div>
  </nav>
);

export default Header;
