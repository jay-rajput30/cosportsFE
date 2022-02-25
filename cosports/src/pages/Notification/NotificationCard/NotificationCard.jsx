import "./NotificationCard.css";
import { getDayDifference } from "../../../utils/cardUtils";
import { useNavigate } from "react-router-dom";

const NotificationCard = ({ notification }) => {
  const navigate = useNavigate();
  console.log({
    text: "inside card",
    date: new Date(
      new Date().getTime() - new Date(notification.createdAt).getTime()
    ).getDate(),
  });

  const cardClickHandler = (postId) => {
    navigate(`/singlepost/${postId}`);
  };
  return (
    <div
      className="notification--card--container"
      onClick={() => cardClickHandler(notification.postId)}
    >
      <p className="notification">{`${notification.username}${notification.actionString}`}</p>
      <span>{getDayDifference(notification.createdAt)}</span>
    </div>
  );
};

export default NotificationCard;
