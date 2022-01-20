import { IconContext } from "react-icons";
import "./LikeAndComments.css";
import { BiHeart, BiCommentDetail, BiShareAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { incrementLikes, updateLikes } from "features/post/postSlice";

const LikeAndComments = ({ post }) => {
  const dispatch = useDispatch();
  const { userDetail, token, status, error } = useSelector(
    (state) => state.user
  );

  const allPosts = useSelector((state) => state.posts);

  const likeButtonClickHandler = (post) => {
    // const { _id: id } = post;
    // console.log("inside like component" + token + post._id);
    dispatch(incrementLikes(post));
    dispatch(updateLikes({ token, postId: post._id }));
  };
  // console.log({likes: post.likes, post})
  return (
    <div className="card--like-comment--container">
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiHeart onClick={() => likeButtonClickHandler(post)} />
        <span className="likes--count">{post.likes.length}</span>
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
