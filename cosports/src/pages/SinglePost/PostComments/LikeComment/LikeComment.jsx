import "./LikeComment.css";
import { BiHeart, BiCommentDetail, BiShareAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import {
  incrementCommentLikes,
  updateCommentLikes,
} from "features/comment/commentSlice";

const LikeComment = ({ comment }) => {
  const dispatch = useDispatch();
  const { userDetail, token, status, error } = useSelector(
    (state) => state.user
  );
  const likeButtonClickHandler = (comment) => {
    console.log({ comment });
    dispatch(incrementCommentLikes(comment));
    dispatch(updateCommentLikes({ token, commentId: comment._id }));
    // dispatch(incrementLikes(comment));
    // dispatch(updateLikes({ token, commentId: comment._id }));
  };

  return (
    <div className="comment--like--container">
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiHeart onClick={() => likeButtonClickHandler(comment)} />
        <span className="comment--likes--count">{comment.likes.length}</span>
      </IconContext.Provider>
      {/* <IconContext.Provider value={{ className: "react--icon" }}>
        <BiCommentDetail onClick={commentBtnClickHandler} />
      </IconContext.Provider> */}
      {/* <IconContext.Provider value={{ className: "react--icon" }}>
        <BiShareAlt />
      </IconContext.Provider> */}
    </div>
  );
};

export default LikeComment;
