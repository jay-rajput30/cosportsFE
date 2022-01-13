import { useParams } from "react-router-dom";
import "./SinglePost.css";
// import { useEffect } from "react";
import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import PostDetails from "./PostDetails/PostDetails";

const SinglePost = () => {
  const { id } = useParams();
  const allPosts = useSelector((state) => state.posts);

  const singlePost = allPosts.posts.find((item) => item._id === id);
  console.log({ singlePost });

  return (
    <div className="single--post--container">
      <IconContext.Provider value={{ className: "back--icon" }}>
        <BiArrowBack />
      </IconContext.Provider>
      <NavbarDesktop />
      <NavbarMobile />
      <div className="post--content">
        <PostDetails post={singlePost} />
      </div>
    </div>
  );
};

export default SinglePost;
