import "./NavbarDesktop.css";
import { FiHome, FiSearch, FiBell, FiUser } from "react-icons/fi";
import { IconContext } from "react-icons";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

const NavbarDesktop = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const homeIconClickHandler = () => {
    navigate("/feeds");
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
    <div className="navbar--desktop--container">
      <div className="navbar--item--container" onClick={homeIconClickHandler}>
        <IconContext.Provider value={{ className: "navbar--icon" }}>
          <FiHome />
        </IconContext.Provider>
        <span>home</span>
      </div>

      <div className="navbar--item--container" onClick={searchIconClickHandler}>
        <IconContext.Provider value={{ className: "navbar--icon" }}>
          <FiSearch />
        </IconContext.Provider>
        <span>search</span>
      </div>

      <div
        className="navbar--item--container"
        onClick={notificationIconClickHandler}
      >
        <IconContext.Provider value={{ className: "navbar--icon" }}>
          <FiBell />
        </IconContext.Provider>
        <span>notifications</span>
      </div>

      <div
        className="navbar--item--container"
        onClick={profileIconClickHandler}
      >
        <IconContext.Provider value={{ className: "navbar--icon" }}>
          <FiUser />
        </IconContext.Provider>
        <span>profile</span>
      </div>
      <Button
        text="post"
        screen="desktop"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default NavbarDesktop;
