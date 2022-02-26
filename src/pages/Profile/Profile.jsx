import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { logoutUser } from "features/user/UserSlice";
import { useDispatch } from "react-redux";
import "./Profile.css";
import ProfileBody from "./ProfileBody/ProfileBody";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { useState } from "react";
import Modal from "components/Modal/Modal";

const Profile = ({
  showModal,
  setShowModal,
  showComponent,
  setShowComponent,
  componentActive,
  componentInactive,
}) => {
  const [editUser, setEditUser] = useState(false);

  // console.log({ firstName, lastName, username, bio});
  const dispatch = useDispatch();

  const logoutBtnClickHandler = () => {
    localStorage.removeItem("userToken");
    dispatch(logoutUser());
  };
  const editFormActive = () => {
    setEditUser(true);
  };
  const editFormInactive = () => {
    setEditUser(false);
  };
  // if (editUser) {
  //   return <EditProfileForm editFormInactive={editFormInactive} />;
  // } else {
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
