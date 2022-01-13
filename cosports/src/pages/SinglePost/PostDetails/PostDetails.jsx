import "./PostDetails.css";
import PostDetailsHeader from "./PostDetailsHeader/PostDetailsHeader";

const PostDetails = ({ post }) => {
  const { date } = post;
  const { firstName, lastName, username } = post.uid;

  console.log({ firstName, lastName, username, date });
  return (
    <div className="post--details--container">
      <PostDetailsHeader
        firstname={firstName}
        lastname={lastName}
        username={username}
        date={date}
      />
    </div>
  );
};

export default PostDetails;
