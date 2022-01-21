import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
const Modal = () => {
  const user = useSelector((state) => state.user);
  const { firstName, lastName, _id: id } = user.userDetail;
  console.log({ firstName, lastName, id });
  return (
    <section className="modal--background">
      <div className="modal--container">
        <p>this is a modal</p>
        {/* <div className="card--avatar">
          {getUserInitials(firstName, lastName)}
        </div> */}
      </div>
    </section>
  );
};

export default Modal;
