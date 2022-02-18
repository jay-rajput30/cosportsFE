import "./PostDetailsBodyContent.css";
import { Image } from "cloudinary-react";
const PostDetailsBodyContent = ({ content }) => {
  return (
    <>
      <p className="post--body--content">{content.text}</p>
      <Image
        className="card--image"
        cloudName={process.env.REACT_APP_CLOUD_NAME}
        publicId={content.postImg}
      />
    </>
  );
};

export default PostDetailsBodyContent;
