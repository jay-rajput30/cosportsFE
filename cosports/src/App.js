import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Feeds from "pages/Feeds/Feeds";
import SinglePost from "pages/SinglePost/SinglePost";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Profile from "pages/Profile/Profile";
import Search from "pages/Search/Search";
import Notification from "pages/Notification/Notification";
import { useState } from "react";
function App() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState({
    status: false,
    type: "",
    postId: "",
  });
  const [showComponent, setShowComponent] = useState(false);

  const componentActive = (id) => {
    console.log("component active func, id:", id);
    setShowComponent((showComponent) => true);
    navigate(`/singlepost/${id}`);
  };

  const componentInactive = () => {
    setShowComponent((showComponent) => false);
  };

  return (
    <div className="main--container">
      <header className="app--header">
        {/* <h1>CoSports</h1> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/feeds"
            element={
              <PrivateRoute>
                <Feeds
                  showModal={showModal}
                  setShowModal={setShowModal}
                  showComponent={showComponent}
                  setShowComponent={setShowComponent}
                  componentActive={componentActive}
                  componentInactive={componentInactive}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/singlepost/:id"
            element={
              <PrivateRoute>
                <SinglePost showModal={showModal} setShowModal={setShowModal} />
              </PrivateRoute>
            }
          />
          <Route
            path="/search"
            element={
              <PrivateRoute>
                <Search showModal={showModal} setShowModal={setShowModal} />
              </PrivateRoute>
            }
          />
          <Route
            path="/notification"
            element={
              <PrivateRoute>
                <Notification
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile
                  showModal={showModal}
                  setShowModal={setShowModal}
                  showComponent={showComponent}
                  setShowComponent={setShowComponent}
                  componentActive={componentActive}
                  componentInactive={componentInactive}
                />
              </PrivateRoute>
            }
          />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/singlepost/:id" element={<SinglePost />} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
