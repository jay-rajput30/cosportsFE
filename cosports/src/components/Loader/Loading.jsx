import { ReactReduxContext } from "react-redux";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader--container">
      <div className="loader">
        <div className="loader--item item--one"></div>
        <div className="loader--item item--two"></div>
        <div className="loader--item item--three"></div>
        <div className="loader--item item--four"></div>
        <div className="loader--item item--five"></div>
      </div>
    </div>
  );
};

export default Loading;
