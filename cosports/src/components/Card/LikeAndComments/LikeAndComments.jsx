import { IconContext } from "react-icons";
import "./LikeAndComments.css";
import { BiHeart, BiCommentDetail, BiShareAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { incrementLikes } from "features/post/postSlice";

const LikeAndComments = ({ post }) => {
  const dispatch = useDispatch();

  // console.log({ content: post.content });

  const likeButtonClickHandler = (post) => {
    const { _id: id } = post;
    // console.log({ id });
    dispatch(incrementLikes(post));
  };
  return (
    <div className="card--like-comment--container">
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiHeart onClick={() => likeButtonClickHandler(post)} />
        <span>{post.likes}</span>
        {/* {post.likes} */}
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiCommentDetail />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiShareAlt />
      </IconContext.Provider>
    </div>
  );
};

export default LikeAndComments;
