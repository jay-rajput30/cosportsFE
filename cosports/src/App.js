import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Feeds from "pages/Feeds/Feeds";
import SinglePost from "pages/SinglePost/SinglePost";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="main--container">
      <header className="app--header">
        {/* <h1>CoSports</h1> */}
        <Routes>
          {/* <PrivateRoute path="/login" element={<Login />} />
          <PrivateRoute path="/signup" element={<SignUp />} />
          <PrivateRoute path="/feeds" element={<Feeds />} />
          <PrivateRoute path="/singlepost/:id" element={<SinglePost />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/singlepost/:id" element={<SinglePost />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
