import "./Button.css";

const Button = ({ text, screen }) => {
  return (
    <button className={screen === "desktop" ? "btn" : "mobile--btn"}>
      {text}
    </button>
  );
};

export default Button;
