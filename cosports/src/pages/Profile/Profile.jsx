import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { logoutUser } from "features/user/UserSlice";
import { useDispatch } from "react-redux";

const Profile = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const logoutBtnClickHandler = () => {
    localStorage.removeItem("userToken");
    dispatch(logoutUser());
  };
  return (
    <div>
      <h1>this is the profile page</h1>
      <button onClick={logoutBtnClickHandler}>logout</button>
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Profile;
