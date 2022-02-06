import { getUserInitials } from "utils/cardUtils";
import "./ViewProfileHeader.css";
import { FiMapPin, FiGlobe } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
// import EditUserBio from "../EditUserBio/EditUserBio";
import { useDispatch } from "react-redux";
import {
  editUserBio,
  followAccount,
  updateUser,
} from "features/user/UserSlice";
import { useState } from "react";
import { getAllUsers } from "features/users/UsersSlice";
// import EditUserFullName from "../EditUserFullName/EditUserFullName";

const ViewProfileHeader = ({ user }) => {
  const { firstName, lastName, username, location, website } = user.uid;
  const { bio, followers, following } = user;
  console.log({ user });
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
          updatedUserDetails={updatedUserDetails}
          user={user}
        />
        <ProfileHeaderTopName
          firstName={firstName}
          lastName={lastName}
          updatedUserDetails={updatedUserDetails}
          setUpdatedUserDetails={setUpdatedUserDetails}
        />
        <ProfileHeaderTopUsername username={username} />
        <ProfileHeaderTopBio
          bio={bio}
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
  user,
}) => {
  const dispatch = useDispatch();
  const userStored = useSelector((state) => state.user);
  // const saveEditedDetialsClickHandler = () => {
  //   dispatch(editUserBio({ updatedUserDetails, token: user.token }));
  //   // console.log("inside rpfile header avatar", updatedUserDetails);
  //   dispatch(updateUser(updatedUserDetails));
  //   editFormInactive();
  // };
  const followBtnClickHandler = (e) => {
    dispatch(
      followAccount({
        accountToFollowId: user.uid._id,
        token: userStored.token,
      })
    );
    dispatch(getAllUsers(userStored.token));
  };
  return (
    <div className="profile--avatar--container">
      <div className="profile--avatar">
        {getUserInitials(firstName, lastName)}
      </div>

      <div>
        <button onClick={followBtnClickHandler}>follow</button>
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
  return <h5 className="profile--name">{firstName + " " + lastName}</h5>;
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
  return <p className="profile--bio">{bio}</p>;
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
export default ViewProfileHeader;
