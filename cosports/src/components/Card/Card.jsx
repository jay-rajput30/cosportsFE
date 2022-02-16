import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";
import "./Card.css";
import LikeAndComments from "./LikeAndComments/LikeAndComments";
import { Image } from "cloudinary-react";

// import "dotenv/config";

const Card = ({
  item,
  showComponent,
  componentActive,
  componentInactive,
  showModal,
  setShowModal,
}) => {
  const { content, likes, updatedAt: date } = item;
  const { firstName, lastName, username } = item.uid;
  // console.log({ item });
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
        <p className="card--content">{content.text}</p>
        {content.postImg ? (
          <Image
            className="card--image"
            cloudName={process.env.REACT_APP_CLOUD_NAME}
            publicId={content.postImg}
          />
        ) : null}
      </CardBody>
      <LikeAndComments
        post={item}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </article>
  );
};

export default Card;
