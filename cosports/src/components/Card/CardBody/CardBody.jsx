import "./CardBody.css";

const CardBody = ({ id, componentActive, children }) => {
  return (
    <div className="card--body" onClick={() => componentActive(id)}>
      {children}
    </div>
  );
};

export default CardBody;
