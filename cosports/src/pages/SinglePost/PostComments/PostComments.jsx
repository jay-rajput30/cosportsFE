import "./PostComments.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllComments } from "features/comment/commentSlice";

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
  return <p>this are the comments for this post</p>;
};

export default PostComments;
