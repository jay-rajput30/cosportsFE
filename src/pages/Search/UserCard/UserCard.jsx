import { useNavigate } from "react-router-dom";
import { getUserInitials } from "utils/cardUtils";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const { firstName, lastName, username } = user.uid;
  const userCardClickHandler = (user) => {
    console.log({ user });
    navigate(`/viewprofile/${user.uid._id}`);
  };
  return (
    <div
      className="user--card--container"
      onClick={() => userCardClickHandler(user)}
    >
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
