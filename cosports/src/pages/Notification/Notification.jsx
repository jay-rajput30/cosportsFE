import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";

const Notification = ({ showModal, setShowModal }) => {
  return (
    <div>
      <h1>this is the notification page</h1>
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Notification;
