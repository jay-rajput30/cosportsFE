import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Feeds from "pages/Feeds/Feeds";

function App() {
  return (
    <div className="main--container">
      <header className="app--header">
        {/* <h1>CoSports</h1> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feeds" element={<Feeds />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
