import axios from "axios";
import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NotificationCard from "./NotificationCard/NotificationCard";
import "./Notification.css";

const Notification = ({ showModal, setShowModal }) => {
  const [allNotifications, setAllNotifications] = useState([]);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cosportsapi.herokuapp.com/notification",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (response.status === 200) {
          setAllNotifications((prev) => response.data.notifications);
        }
        console.log({ res: response.data.notifications });
      } catch (e) {
        console.log("oops something went wrong", e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="notification--container">
      {allNotifications.map((notification) => {
        return (
          <NotificationCard
            key={notification._id}
            notification={notification}
          />
        );
      })}
      {}
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Notification;
