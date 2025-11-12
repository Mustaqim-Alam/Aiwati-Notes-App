import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
