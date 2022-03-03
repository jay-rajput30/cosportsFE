import Modal from "components/Modal/Modal";
import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewProfile.css";
import ViewProfileBody from "./ViewProfileBody/ViewProfileBody";
import ViewProfileHeader from "./ViewProfileHeader/ViewProfileHeader";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons";

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
  const navigate = useNavigate();
  const filteredPosts = userPosts.posts.filter((item) => item.uid._id === id);
  const filteredUser = userFound.searchedAccounts.filter(
    (item) => item.uid._id === id
  );

  const backButtonClickHandler = () => {
    navigate("/search");
  };

  return (
    <div className="view--profile--container">
      <IconContext.Provider value={{ className: "view--profile--back--icon" }}>
        <BiArrowBack onClick={backButtonClickHandler} />
      </IconContext.Provider>
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
      {showModal.status && (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default ViewProfile;
