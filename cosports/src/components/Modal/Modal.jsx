import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserInitials } from "utils/cardUtils";
import Button from "components/Button/Button";
const Modal = ({ showModal, setShowModal }) => {
  const user = useSelector((state) => state.user);
  const { firstName, lastName, _id: id } = user.userDetail;
  console.log({ firstName, lastName, id });
  return (
    <section className="modal--background">
      <form className="modal--container" onSubmit={(e) => e.preventDefault()}>
        {/* <div className="modal--avatar">
          {getUserInitials(firstName, lastName)}
        </div> */}
        <div className="modal--form--item">
          <textarea
            className="modal--textarea"
            placeholder="what's on your mind"
            autoFocus
            rows="5"
          />
          <button>post</button>
        </div>

        <button
          className="modal--close--btn"
          onClick={() => setShowModal((prev) => false)}
        >
          X
        </button>
      </form>
    </section>
  );
};

export default Modal;
