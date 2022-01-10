import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";
import "./Card.css";

const Card = ({ item }) => {
  const { content, likes, updatedAt: date } = item;
  const { firstName, lastName, username } = item.uid;

  return (
    <article className="card--container">
      <CardHeader
        firstname={firstName}
        lastname={lastName}
        username={username}
        date={date}
      />
      <CardBody>
        <p className="card--content">{content}</p>
      </CardBody>
    </article>
  );
};

export default Card;