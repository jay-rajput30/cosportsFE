import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ViewProfile.css";

const ViewProfile = () => {
  const { id } = useParams();
  const userFound = useSelector((state) => state.users);
  const userPosts = useSelector((state) => state.posts);

  const filteredPosts = userPosts.posts.filter((item) => item.uid._id === id);
  const filteredUser = userFound.users.filter((item) => item._id === id);
  console.log({ filteredUser, filteredPosts });
  return <p>user id: {id}</p>;
};

export default ViewProfile;
