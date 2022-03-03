import "./LikeComment.css";
import { BiHeart } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import {
  incrementCommentLikes,
  updateCommentLikes,
} from "features/comment/commentSlice";

import { FaHeart } from "react-icons/fa";

const LikeComment = ({ comment }) => {
  const dispatch = useDispatch();
  const { userDetail, token } = useSelector((state) => state.user);
  const likeButtonClickHandler = (comment) => {
    dispatch(incrementCommentLikes(comment));
    dispatch(updateCommentLikes({ token, commentId: comment._id }));
  };

  const alreadyLiked = comment.likes.includes(userDetail._id);

  const showLikes = alreadyLiked ? (
    <IconContext.Provider value={{ className: "heart--filled" }}>
      <FaHeart onClick={() => likeButtonClickHandler(comment)} />
      <span className="likes--count">{comment.likes.length}</span>
    </IconContext.Provider>
  ) : (
    <IconContext.Provider value={{ className: "react--icon" }}>
      <BiHeart onClick={() => likeButtonClickHandler(comment)} />
      <span className="likes--count">{comment.likes.length}</span>
    </IconContext.Provider>
  );

  return <div className="comment--like--container">{showLikes}</div>;
};

export default LikeComment;
