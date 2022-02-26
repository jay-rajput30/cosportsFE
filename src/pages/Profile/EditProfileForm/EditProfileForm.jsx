import "./EditProfileForm.css";
import { useSelector } from "react-redux";

const EditProfileForm = ({ editFormInactive }) => {
  const user = useSelector((state) => state.user);
  const { firstName, lastName, username } = user.userDetail;
  const { bio } = user.userDetail.userAccountDetails;
  return (
    <form
      className="edit--user--form--container"
      onSubmit={(e) => e.preventDefault()}
    >
      <label classname="edit--user--name--lbl" htmlFor="edit--user--name">
        name
      </label>
      <input
        type="text"
        value={firstName + " " + lastName}
        id="edit--user--name"
      />

      <label
        classname="edit--user--username--lbl"
        htmlFor="edit--user--username"
      >
        username
      </label>
      <input type="text" value={username} className="edit--user--username" />
      <label classname="edit--user--bio--lbl" htmlFor="edit--user--bio">
        bio
      </label>
      <input type="text" value={username} id="edit--user--username" />

      <label classname="edit--user--bio--lbl" htmlFor="edit--user--bio">
        bio
      </label>
      <textarea value={bio} type="text" id="edit--user--bio" />

      <button className="edit--user--btn--save">save</button>
      <button className="edit--user--btn--close" onClick={editFormInactive}>
        close
      </button>
    </form>
  );
};

export default EditProfileForm;
