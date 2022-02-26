import { getDateFormat, getUserInitials } from "utils/cardUtils";
import "./CommentCard.css";

const CommentCard = ({ comment }) => {
  const { firstName, lastName, username } = comment.uid;
  const { date } = comment;
  return (
    <div className="comment--card--container">
      <div className="comment--avatar">
        {getUserInitials(firstName, lastName)}
      </div>

      <div className="comment--header--top">
        <h4 className="comment--name">{firstName + " " + lastName}</h4>
        <div className="comment--header">
          <span className="comment--username">{username}</span>
          <span className="comment--date">{getDateFormat(date)}</span>
        </div>

        <p className="comment--content">{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
