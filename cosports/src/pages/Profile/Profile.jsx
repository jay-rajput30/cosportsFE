import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { logoutUser } from "features/user/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import ProfileBody from "./ProfileBody/ProfileBody";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm/EditProfileForm";

const Profile = ({
  showModal,
  setShowModal,
  showComponent,
  setShowComponent,
  componentActive,
  componentInactive,
}) => {
  const user = useSelector((state) => state.user);
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
      />
      <button onClick={logoutBtnClickHandler}>logout</button>
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
    </article>
  );
  // }
};

export default Profile;
