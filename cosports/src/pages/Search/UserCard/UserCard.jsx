import { getUserInitials } from "utils/cardUtils";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const { firstName, lastName, username } = user;
  return (
    <div className="user--card--container">
      <div className="user--card--avatar">
        {getUserInitials(firstName, lastName)}
      </div>
      <div className="user--card--details">
        <p className="user--card--name">{firstName + " " + lastName}</p>
        <p className="user--card--username">{username}</p>
      </div>
    </div>
  );
};

export default UserCard;
