import "./CardHeader.css";

const CardHeader = ({ firstname, lastname, username, date }) => {
  return (
    <div className="card--header">
      <h4 className="card--name">{firstname + " " + lastname}</h4>
      <span className="card--username">{username}</span>
      <span className="card--date">{date}</span>
    </div>
  );
};

export default CardHeader;
