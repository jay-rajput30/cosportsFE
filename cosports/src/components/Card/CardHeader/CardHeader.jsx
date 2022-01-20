import { getDateFormat, getUserInitials } from "utils/cardUtils";
import "./CardHeader.css";

const CardHeader = ({
  firstname,
  lastname,
  username,
  date,
  id,
  componentActive,
}) => {
  // console.log({ firstname, lastname, username, date, id });
  return (
    <div className="card--header" onClick={() => componentActive(id)}>
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
    </div>
  );
};

export default CardHeader;
