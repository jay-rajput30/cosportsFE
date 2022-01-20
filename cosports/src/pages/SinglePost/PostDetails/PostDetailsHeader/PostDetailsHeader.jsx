import { getDateFormat, getUserInitials } from "utils/cardUtils";
import "./PostDetailsHeader.css";

const PostDetailsHeader = ({ firstname, lastname, username }) => {
  return (
    <div className="post--header">
      <div className="post--avatar--container">
        <div className="post--avatar">
          {getUserInitials(firstname, lastname)}
        </div>
      </div>
      <div className="post--header--top">
        <h4 className="post--name">{firstname + " " + lastname}</h4>
        <span className="post--username">{username}</span>
      </div>
    </div>
  );
};

export default PostDetailsHeader;
