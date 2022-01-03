import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="main--container">
      <header className="app--header">
        <h1>CoSports</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <small>Haven't signed up yet eh?</small>
      </header>
    </div>
  );
}

export default App;
