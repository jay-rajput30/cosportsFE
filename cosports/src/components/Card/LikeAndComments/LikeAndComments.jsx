import { IconContext } from "react-icons";
import "./LikeAndComments.css";
import { BiHeart, BiCommentDetail, BiShareAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { incrementLikes } from "features/post/postSlice";

const LikeAndComments = ({ post }) => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts);
  // check if user has already liked the comment if yes dont increment the count.
  // const alreadyLiked =
  const likeButtonClickHandler = (post) => {
    // const { _id: id } = post;
    dispatch(incrementLikes(post));
  };
  return (
    <div className="card--like-comment--container">
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiHeart onClick={() => likeButtonClickHandler(post)} />
        {/* <span className="likes--count">{post.likes.length}</span> */}
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
