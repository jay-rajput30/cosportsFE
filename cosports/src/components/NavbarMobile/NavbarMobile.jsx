import "./NavbarMobile.css";
import { FiHome, FiSearch, FiBell, FiSettings } from "react-icons/fi";
import { IconContext } from "react-icons";

const NavbarMobile = () => {
  return (
    <div className="navbar--mobile--container">
      <IconContext.Provider value={{ className: "navbar--icon" }}>
        <FiHome />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "navbar--icon" }}>
        <FiSearch />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "navbar--icon" }}>
        <FiBell />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "navbar--icon" }}>
        <FiSettings />
      </IconContext.Provider>
    </div>
  );
};

export default NavbarMobile;
