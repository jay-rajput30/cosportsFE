import "./CommentCard.css";

const CommentCard = ({ comment }) => {
  const { firstName, lastName, username } = comment.uid;
  const { date } = comment;
  return (
    <div className="comment--card--container">
      {/* <div className="card--avatar">
          {getUserInitials(firstName, lastname)}
        </div>
        <h4 className="card--name">{firstname + " " + lastname}</h4>
      </div>
      <div className="card--header--top">
        <span className="card--username">{username}</span>
        <span className="card--date">{getDateFormat(date)}</span>
      </div> */}
    </div>
  );
};

export default CommentCard;
