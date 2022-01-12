import "./NavbarDesktop.css";
import { FiHome, FiSearch, FiBell, FiSettings } from "react-icons/fi";
import { IconContext } from "react-icons";
import Button from "components/Button/Button";

const NavbarDesktop = () => {
  return (
    <div className="navbar--desktop--container">
      <div className="navbar--item--container">
        <IconContext.Provider value={{ className: "navbar--icon" }}>
          <FiHome />
        </IconContext.Provider>
        <span>home</span>
      </div>

      <div className="navbar--item--container">
        <IconContext.Provider value={{ className: "navbar--icon" }}>
          <FiSearch />
        </IconContext.Provider>
        <span>search</span>
      </div>

      <div className="navbar--item--container">
        <IconContext.Provider value={{ className: "navbar--icon" }}>
          <FiBell />
        </IconContext.Provider>
        <span>notifications</span>
      </div>

      <div className="navbar--item--container">
        <IconContext.Provider value={{ className: "navbar--icon" }}>
          <FiSettings />
        </IconContext.Provider>
        <span>settings</span>
      </div>
      <Button text="post" />
    </div>
  );
};

export default NavbarDesktop;
