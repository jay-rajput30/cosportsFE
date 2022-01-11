import { getDateFormat, getUserInitials } from "utils/cardUtils";
import "./CardHeader.css";

const CardHeader = ({ firstname, lastname, username, date }) => {
  return (
    <div className="card--header">
      <div className="card--header--top">
        <div className="card--avatar">
          {getUserInitials(firstname, lastname)}
        </div>
        <h4 className="card--name">{firstname + " " + lastname}</h4>
      </div>
      <div className="card--header--top">
        <span className="card--username">{username}</span>
        <span className="card--date">{getDateFormat(date)}</span>
      </div>

      {/* <span className="card--date"></span> */}
    </div>
  );
};

export default CardHeader;
