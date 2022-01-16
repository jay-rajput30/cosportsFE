import "./PostComments.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllComments } from "features/comment/commentSlice";
import CommentCard from "components/CommentCard/CommentCard";
import LikeAndComments from "components/Card/LikeAndComments/LikeAndComments";

const PostComments = ({ post }) => {
  const dispatch = useDispatch();
  const allComments = useSelector((state) => state.comments);

  const { token } = useSelector((state) => state.user);
  const comments = allComments.comments.filter(
    (item) => item.postId === post._id
  );

  useEffect(() => {
    const fetchComments = async () => {
      dispatch(fetchAllComments(token));
    };

    fetchComments();
  }, []);
  console.log({ comments });
  return (
    <article class="comments--container">
      {comments.map((item) => {
        return (
          <article className="single--comment">
            <CommentCard comment={item} />
            <LikeAndComments />
          </article>
        );
      })}
    </article>
  );
};

export default PostComments;
