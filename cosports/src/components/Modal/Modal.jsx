import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
// import { getUserInitials } from "utils/cardUtils";
// import Button from "components/Button/Button";
import { useState } from "react";
import { createPost } from "features/post/postSlice";
import { addComment } from "features/comment/commentSlice";

const Modal = ({ showModal, setShowModal }) => {
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //   const { firstName, lastName, _id: id } = user.userDetail;

  const postBtnClickHandler = () => {
    if (showModal.type === "post") {
      dispatch(
        createPost({
          postData: { content, type: "post" },
          token: user.token,
        })
      );
      //   add comment api call needs to send content and post id to backend
    } else {
      dispatch(
        addComment({
          postData: { content, postId: showModal.postId },
          token: user.token,
        })
      );
    }

    setShowModal((prev) => ({
      ...prev,
      status: false,
      type: "",
      postId: "",
    }));
  };
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
            rows="8"
            name={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={postBtnClickHandler}>post</button>
        </div>

        <button
          className="modal--close--btn"
          onClick={() =>
            setShowModal((prev) => ({
              ...prev,
              status: false,
              type: "",
              postId: "",
            }))
          }
        >
          X
        </button>
      </form>
    </section>
  );
};

export default Modal;
