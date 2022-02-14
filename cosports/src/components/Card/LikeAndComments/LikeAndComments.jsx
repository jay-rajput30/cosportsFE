import { IconContext } from "react-icons";
import "./LikeAndComments.css";
import { BiHeart, BiCommentDetail, BiShareAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { incrementLikes, updateLikes } from "features/post/postSlice";

const LikeAndComments = ({ post, showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const { userDetail, token, status, error } = useSelector(
    (state) => state.user
  );

  const allPosts = useSelector((state) => state.posts);

  const likeButtonClickHandler = (post) => {
    console.log({ post });
    dispatch(incrementLikes(post));
    dispatch(updateLikes({ token, postId: post._id }));
  };

  const commentBtnClickHandler = () => {
    setShowModal((prev) => ({
      ...prev,
      status: true,
      type: "comment",
      postId: post._id,
    }));
  };
  return (
    <div className="card--like-comment--container">
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiHeart onClick={() => likeButtonClickHandler(post)} />
        <span className="likes--count">{post.likes.length}</span>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiCommentDetail onClick={commentBtnClickHandler} />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiShareAlt />
      </IconContext.Provider>
    </div>
  );
};

export default LikeAndComments;
