import "./NavbarMobile.css";
import { FiHome, FiSearch, FiBell, FiUser } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

const NavbarMobile = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const homeIconClickHandler = () => {
    navigate("/");
  };
  const searchIconClickHandler = () => {
    navigate("/search");
  };
  const notificationIconClickHandler = () => {
    navigate("/notification");
  };
  const profileIconClickHandler = () => {
    navigate("/profile");
  };
  return (
    <div className="navbar--mobile--container">
      <IconContext.Provider value={{ className: "navbar--icon" }}>
        <FiHome onClick={homeIconClickHandler} />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "navbar--icon" }}>
        <FiSearch onClick={searchIconClickHandler} />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "navbar--icon" }}>
        <FiBell onClick={notificationIconClickHandler} />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "navbar--icon" }}>
        <FiUser onClick={profileIconClickHandler} />
      </IconContext.Provider>
      <Button
        text="+"
        screen="mobile"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default NavbarMobile;
