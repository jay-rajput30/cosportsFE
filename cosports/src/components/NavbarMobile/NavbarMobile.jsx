import "./NavbarMobile.css";
import { FiHome, FiSearch, FiBell, FiSettings } from "react-icons/fi";
import { IconContext } from "react-icons";

const NavbarMobile = () => {
  return (
    <div className="navbar--mobile--container">
      <IconContext.Provider value={{ className: "react--icon" }}>
        <FiHome />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "react--icon" }}>
        <FiSearch />
      </IconContext.Provider>
      <IconContext.Provider.Provider value={{ className: "react--icon" }}>
        <FiBell />
      </IconContext.Provider.Provider>
      <IconContext.Provider value={{ className: "react--icon" }}>
        <FiSettings />
      </IconContext.Provider>
    </div>
  );
};

export default NavbarMobile;
