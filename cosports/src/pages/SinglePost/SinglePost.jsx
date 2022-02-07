import { useNavigate, useParams } from "react-router-dom";
import "./SinglePost.css";
// import { useEffect } from "react";
import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import PostDetails from "./PostDetails/PostDetails";
import PostComments from "./PostComments/PostComments";
import Modal from "components/Modal/Modal";

const SinglePost = ({ showModal, setShowModal }) => {
  const { id } = useParams();
  const allPosts = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const singlePost = allPosts.posts.find((item) => item._id === id);
  console.log({ singlePost });

  const backButtonClickHandler = () => {
    navigate("/feeds");
  };
  return (
    <div className="single--post--container">
      <IconContext.Provider value={{ className: "back--icon" }}>
        <BiArrowBack onClick={backButtonClickHandler} />
      </IconContext.Provider>
      <div className="post--content">
        <PostDetails post={singlePost} />
        <PostComments post={singlePost} />
      </div>
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      {showModal.status && (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default SinglePost;
