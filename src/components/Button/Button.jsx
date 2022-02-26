import Modal from "components/Modal/Modal";
import "./Button.css";

const Button = ({ text, screen, showModal, setShowModal }) => {
  return (
    <button
      className={screen === "desktop" ? "btn" : "mobile--btn"}
      onClick={() =>
        setShowModal((prev) => ({ ...prev, status: true, type: "post" }))
      }
    >
      {text}
    </button>
  );
};

export default Button;
