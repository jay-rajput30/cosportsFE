import { getUserInitials } from "utils/cardUtils";
import "./ProfileHeader.css";
import { FiMapPin, FiGlobe, FiPower } from "react-icons/fi";

import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import EditUserBio from "../EditUserBio/EditUserBio";
import { useDispatch } from "react-redux";
import {
  editUserBio,
  fetchUserLogin,
  updateUser,
} from "features/user/UserSlice";
import { useState } from "react";
import EditUserFullName from "../EditUserFullName/EditUserFullName";

const ProfileHeader = ({
  editUser,
  editFormActive,
  editFormInactive,
  logoutBtnClickHandler,
}) => {
  const user = useSelector((state) => state.user);
  const { firstName, lastName, username, location, website } = user.userDetail;
  const { bio, followers, following } = user.userDetail.userAccountDetails;

  const [updatedUserDetails, setUpdatedUserDetails] = useState({
    newBio: bio,
    newFullName: firstName + " " + lastName,
  });
  return (
    <div className="profile--header--container">
      <ProfileHeaderTop>
        <ProfileHeaderTopAvatar
          firstName={firstName}
          lastName={lastName}
          editUser={editUser}
          editFormActive={editFormActive}
          editFormInactive={editFormInactive}
          updatedUserDetails={updatedUserDetails}
          logoutBtnClickHandler={logoutBtnClickHandler}
        />
        <ProfileHeaderTopName
          firstName={firstName}
          lastName={lastName}
          editUser={editUser}
          updatedUserDetails={updatedUserDetails}
          setUpdatedUserDetails={setUpdatedUserDetails}
        />
        <ProfileHeaderTopUsername username={username} />
        <ProfileHeaderTopBio
          bio={bio}
          editUser={editUser}
          editFormActive={editFormActive}
          editFormInactive={editFormInactive}
          updatedUserDetails={updatedUserDetails}
          setUpdatedUserDetails={setUpdatedUserDetails}
        />
      </ProfileHeaderTop>
      <ProfileHeaderBottom>
        <ProfileHeaderBottomLocation location={location} />
        <ProfileHeaderBottomWebsite website={website} />
      </ProfileHeaderBottom>
      <ProfileFollowCounts followers={followers} following={following} />
    </div>
  );
};

export const ProfileFollowCounts = ({ followers, following }) => {
  return (
    <div className="profile--follow--count">
      <span>{following.length} Following</span>
      <span>{followers.length} Followers</span>
    </div>
  );
};
export const ProfileHeaderTop = ({ children }) => {
  return <div className="profile--header--top--container">{children}</div>;
};

export const ProfileHeaderTopAvatar = ({
  firstName,
  lastName,
  editUser,
  editFormActive,
  editFormInactive,
  updatedUserDetails,
  logoutBtnClickHandler,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const saveEditedDetialsClickHandler = () => {
    dispatch(editUserBio({ updatedUserDetails, token: user.token }));
    dispatch(updateUser(updatedUserDetails));
    editFormInactive();
  };
  return (
    <div className="profile--avatar--container">
      <div className="profile--avatar">
        {getUserInitials(firstName, lastName)}
      </div>
      <div>
        {editUser === false && <button onClick={editFormActive}>edit</button>}
        {editUser === false && (
          <button>
            <IconContext.Provider value={{ className: "logout--icon" }}>
              <FiPower onClick={logoutBtnClickHandler} />
            </IconContext.Provider>
          </button>
        )}

        {editUser && (
          <button onClick={saveEditedDetialsClickHandler}>save</button>
        )}
        {editUser && <button onClick={editFormInactive}>cancel</button>}
      </div>
    </div>
  );
};
export const ProfileHeaderTopName = ({
  firstName,
  lastName,
  editUser,
  updatedUserDetails,
  setUpdatedUserDetails,
}) => {
  return editUser ? (
    <EditUserFullName
      // editFormInactive={editFormInactive}
      updatedUserDetails={updatedUserDetails}
      setUpdatedUserDetails={setUpdatedUserDetails}
    />
  ) : (
    <h5 className="profile--name">{firstName + " " + lastName}</h5>
  );
};

export const ProfileHeaderTopUsername = ({ username }) => {
  return <p className="profile--username">{username}</p>;
};

export const ProfileHeaderTopBio = ({
  bio,
  editUser,
  editFormActive,
  editFormInactive,
  updatedUserDetails,
  setUpdatedUserDetails,
}) => {
  return editUser ? (
    <EditUserBio
      editFormInactive={editFormInactive}
      updatedUserDetails={updatedUserDetails}
      setUpdatedUserDetails={setUpdatedUserDetails}
    />
  ) : (
    <p className="profile--bio">{bio}</p>
  );
};

export const ProfileHeaderBottom = ({ children }) => {
  return <div className="profile--header--bottom">{children}</div>;
};

export const ProfileHeaderBottomLocation = ({ location }) => {
  return (
    <span className="profile--header--bottom--item profile--location">
      <IconContext.Provider value={{ className: "profile--icon" }}>
        <FiMapPin />
      </IconContext.Provider>{" "}
      {location}
    </span>
  );
};

export const ProfileHeaderBottomWebsite = ({ website }) => {
  return (
    <a
      href={`${website}`}
      className="profile--header--bottom--item profile--website"
    >
      <IconContext.Provider value={{ className: "profile--icon" }}>
        <FiGlobe />
      </IconContext.Provider>{" "}
      {website}
    </a>
  );
};
export default ProfileHeader;
