import "./CardHeader.css";

const CardHeader = ({ firstname, lastname, username, date }) => {
  return (
    <div className="card--header">
      <div className="card--header--top">
        <div className="card--avatar"></div>
        <h4 className="card--name">{firstname + " " + lastname}</h4>
      </div>

      <span className="card--username">{username + "  " + date}</span>
      {/* <span className="card--date"></span> */}
    </div>
  );
};

export default CardHeader;
