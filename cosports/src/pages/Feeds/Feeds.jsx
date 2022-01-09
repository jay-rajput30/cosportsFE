import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPosts } from "features/post/postSlice";
import Card from "components/Card/Card";
const Feeds = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts);
  const { userDetail, token, status, error } = useSelector(
    (state) => state.user
  );
  // console.log({ allPosts });
  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(fetchAllPosts(token));
    };

    fetchPosts();
  }, []);
  return (
    <div className="feed--container">
      {allPosts.posts.map((item) => {
        return <Card key={item._id} item={item} />;
      })}
    </div>
  );
};

export default Feeds;
