import { getUserInitials } from "utils/cardUtils";
import "./ProfileHeader.css";
import { FiMapPin, FiGlobe } from "react-icons/fi";
import { IconContext } from "react-icons";
const ProfileHeader = ({
  firstName,
  lastName,
  username,
  bio,
  location,
  website,
  followers,
  following,
}) => {
  return (
    <div className="profile--header--container">
      <ProfileHeaderTop>
        <ProfileHeaderTopAvatar firstName={firstName} lastName={lastName} />
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

export const ProfileHeaderTopAvatar = ({ firstName, lastName }) => {
  return (
    <div className="profile--avatar--container">
      <div className="profile--avatar">
        {getUserInitials(firstName, lastName)}
      </div>
      <button>edit</button>
    </div>
  );
};
export const ProfileHeaderTopName = ({ firstName, lastName }) => {
  return <h5 className="profile--name">{firstName + " " + lastName}</h5>;
};

export const ProfileHeaderTopUsername = ({ username }) => {
  return <p className="profile--username">{username}</p>;
};

export const ProfileHeaderTopBio = ({ bio }) => {
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
export default ProfileHeader;
