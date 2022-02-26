import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
// import { getUserInitials } from "utils/cardUtils";
// import Button from "components/Button/Button";
import { useState } from "react";
import { createPost } from "features/post/postSlice";
import { addComment } from "features/comment/commentSlice";
// import "dotenv/config";
import axios from "axios";

const Modal = ({ showModal, setShowModal }) => {
  const [content, setContent] = useState({ text: "", postImg: null });
  const [ setRes] = useState();
  const [ setUploadStatus] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //   const { firstName, lastName, _id: id } = user.userDetail;

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      console.log({ image: content.postImg });
      formData.append("file", content.postImg);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      const response = await axios.post(process.env.REACT_APP_URL, formData);
      setRes(response);
      setUploadStatus(true);
      setShowModal({ ...showModal, status: "loading" });
      return response;
    } catch (e) {
      console.error({ error: e });
    }
  };
  const postBtnClickHandler = async (e) => {
    if (showModal.type === "post") {
      try {
        let res = await uploadImage();
        if (res.status === 200) {
          const { secure_url } = res.data;
          setContent((prev) => ({ ...prev, postImg: secure_url }));

          const newContent = { text: content.text, postImg: secure_url };
          dispatch(
            createPost({
              postData: newContent,
              token: user.token,
            })
          );
        }
        setShowModal({ ...showModal, status: "loading" });
      } catch {
        console.log("oops something went wrong.  please login again and try");
      } finally {
        setShowModal({ ...showModal, status: "success" });
      }

      // console.log({ res });
    } else {
      dispatch(
        addComment({
          postData: { content: content.text, postId: showModal.postId },
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
            onChange={(e) => setContent({ ...content, text: e.target.value })}
          />
          {showModal.type === "post" && (
            <input
              className="input--file"
              type="file"
              onChange={(e) =>
                setContent({ ...content, postImg: e.target.files[0] })
              }
            />
          )}
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
