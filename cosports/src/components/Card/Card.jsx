import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";
import "./Card.css";
import LikeAndComments from "./LikeAndComments/LikeAndComments";

const Card = ({ item, showComponent, componentActive, componentInactive }) => {
  const { content, likes, updatedAt: date } = item;
  const { firstName, lastName, username } = item.uid;

  return (
    <article className="card--container">
      <CardHeader
        firstname={firstName}
        lastname={lastName}
        username={username}
        date={date}
        id={item._id}
        componentActive={componentActive}
      />
      <CardBody id={item._id} componentActive={componentActive}>
        <p className="card--content">{content}</p>
      </CardBody>
      <LikeAndComments post={item} />
    </article>
  );
};

export default Card;
