import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ViewProfile.css";
import ViewProfileBody from "./ViewProfileBody/ViewProfileBody";
import ViewProfileHeader from "./ViewProfileHeader/ViewProfileHeader";

const ViewProfile = ({
  showModal,
  setShowModal,
  showComponent,
  setShowComponent,
  componentActive,
  componentInactive,
}) => {
  const { id } = useParams();
  const userFound = useSelector((state) => state.users);
  const userPosts = useSelector((state) => state.posts);

  const filteredPosts = userPosts.posts.filter((item) => item.uid._id === id);
  const filteredUser = userFound.users.filter((item) => item.uid._id === id);

  console.log({ id, users: userFound.users, filteredUser, filteredPosts });
  return (
    <>
      <ViewProfileHeader user={filteredUser[0]} />
      <ViewProfileBody
        showModal={showModal}
        setShowModal={setShowModal}
        componentActive={componentActive}
        componentInactive={componentInactive}
        posts={filteredPosts}
      />
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ViewProfile;
