import { getUserInitials } from "utils/cardUtils";
import "./ViewProfileHeader.css";
import { FiMapPin, FiGlobe } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { followAccount, getUser } from "features/user/UserSlice";
import { useEffect, useState } from "react";
import { getAccountDetail } from "features/users/UsersSlice";

const ViewProfileHeader = ({ user }) => {
  const storedUser = useSelector((state) => state.user);
  const { firstName, lastName, username, location, website } = user.uid;
  const { bio, followers, following } = user;

  const alreadyFollowing = user.followers.includes(storedUser.userDetail._id);

  return (
    <div className="view--profile--header--container">
      <ProfileHeaderTop>
        <ProfileHeaderTopAvatar
          firstName={firstName}
          lastName={lastName}
          user={user}
          alreadyFollowing={alreadyFollowing}
        />
        <ProfileHeaderTopName firstName={firstName} lastName={lastName} />
        <ProfileHeaderTopUsername username={username} />
        <ProfileHeaderTopBio bio={bio} />
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
  user,
  alreadyFollowing,
}) => {
  const dispatch = useDispatch();
  const userStored = useSelector((state) => state.user);
  const [follow, setFollow] = useState(alreadyFollowing);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      dispatch(
        getAccountDetail({
          searchTerm: user.uid.username,
          token: userStored.token,
        })
      );
      dispatch(getUser(userStored.token));
    };
    fetchAccountDetails();
  }, [follow]);
  const followBtnClickHandler = (e) => {
    dispatch(
      followAccount({
        accountToFollowId: user.uid._id,
        token: userStored.token,
      })
    );

    setFollow((prev) => (prev === true ? false : true));

    if (userStored.status === "loading") {
      console.log("loading");
    }
  };

  return (
    <div className="profile--avatar--container">
      <div className="profile--avatar">
        {getUserInitials(firstName, lastName)}
      </div>

      <div>
        {alreadyFollowing ? (
          <button onClick={followBtnClickHandler}>unfollow</button>
        ) : (
          <button onClick={followBtnClickHandler}>follow</button>
        )}
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
