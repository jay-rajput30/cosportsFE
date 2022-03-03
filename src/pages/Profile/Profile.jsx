import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { logoutUser } from "features/user/UserSlice";
import { useDispatch } from "react-redux";
import "./Profile.css";
import ProfileBody from "./ProfileBody/ProfileBody";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import { useNavigate } from "react-router-dom";

const Profile = ({
  showModal,
  setShowModal,
  showComponent,
  setShowComponent,
  componentActive,
  componentInactive,
}) => {
  const [editUser, setEditUser] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logoutBtnClickHandler = () => {
    localStorage.removeItem("userToken");
    dispatch(logoutUser());
    navigate("/");
  };
  const editFormActive = () => {
    setEditUser(true);
  };
  const editFormInactive = () => {
    setEditUser(false);
  };

  return (
    <article className="profile--container">
      <ProfileHeader
        editUser={editUser}
        editFormActive={editFormActive}
        editFormInactive={editFormInactive}
        logoutBtnClickHandler={logoutBtnClickHandler}
      />

      <ProfileBody
        showModal={showModal}
        setShowModal={setShowModal}
        showComponent={showComponent}
        setShowComponent={setShowComponent}
        componentActive={componentActive}
        componentInactive={componentInactive}
      />
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
      {showModal.status && (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      )}
    </article>
  );
  // }
};

export default Profile;
