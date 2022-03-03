import LikeAndComments from "components/Card/LikeAndComments/LikeAndComments";
import "./PostDetails.css";
import PostDetailsBody from "./PostDetailsBody/PostDetailsBody";
import PostDetailsBodyComment from "./PostDetailsBody/PostDetailsBodyContent/PostDetailsBodyContent";
import PostDetailsHeader from "./PostDetailsHeader/PostDetailsHeader";

const PostDetails = ({ post, showModal, setShowModal }) => {
  const { firstName, lastName, username } = post.uid;
  const { content } = post;
  return (
    <div className="post--details--container">
      <PostDetailsHeader
        firstname={firstName}
        lastname={lastName}
        username={username}
      />
      <PostDetailsBody>
        <PostDetailsBodyComment
          content={content}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </PostDetailsBody>
      <LikeAndComments
        post={post}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default PostDetails;
