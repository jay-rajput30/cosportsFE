import { IconContext } from "react-icons";
import "./LikeAndComments.css";
import { BiHeart, BiCommentDetail, BiShareAlt } from "react-icons/bi";

const LikeAndComments = () => {
  return (
    <div className="card--like-comment--container">
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiHeart />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiCommentDetail />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "react--icon" }}>
        <BiShareAlt />
      </IconContext.Provider>
    </div>
  );
};

export default LikeAndComments;
