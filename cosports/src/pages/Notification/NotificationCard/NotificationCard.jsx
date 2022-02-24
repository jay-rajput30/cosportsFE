import "./NotificationCard.css";

const NotificationCard = ({ notification }) => {
  console.log({ text: "inside card", notification });
  return <p>{`${notification.username}${notification.actionString}`}</p>;
};

export default NotificationCard;
