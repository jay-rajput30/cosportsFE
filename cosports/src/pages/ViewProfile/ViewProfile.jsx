import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ViewProfile.css";
import ViewProfileHeader from "./ViewProfileHeader/ViewProfileHeader";

const ViewProfile = ({ showModal, setShowModal }) => {
  const { id } = useParams();
  const userFound = useSelector((state) => state.users);
  const userPosts = useSelector((state) => state.posts);

  const filteredPosts = userPosts.posts.filter((item) => item.uid._id === id);
  const filteredUser = userFound.users.filter((item) => item._id === id);
  console.log({ filteredUser, filteredPosts });
  return (
    <>
      {/* <ViewProfileHeader user={filteredUser} /> */}
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ViewProfile;
