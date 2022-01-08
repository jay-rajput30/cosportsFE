import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPosts } from "features/post/postSlice";
const Feeds = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts);
  const { userDetail, token, status, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(fetchAllPosts(token));
    };

    fetchPosts();
  }, []);
  return (
    <div>
      {allPosts.map((item) => {
        return <p>{item.content}</p>;
      })}
    </div>
  );
};

export default Feeds;
