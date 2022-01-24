import "./EditUserBio.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editUserBio } from "features/user/UserSlice";

const EditUserBio = ({ editFormInactive }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { bio } = user.userDetail.userAccountDetails;
  const [newBio, setNewBio] = useState(bio);

  const saveBtnClickHandler = () => {
    dispatch(editUserBio({ newBio, token: user.token }));
    editFormInactive();
  };
  return (
    <div className="user--bio--container">
      <input
        type="text"
        value={newBio}
        onChange={(e) => setNewBio(e.target.value)}
      />
      <button className="user--bio--save--btn" onClick={saveBtnClickHandler}>
        save
      </button>
      {/* <button onCLick={editFormInactive}>close</button> */}
    </div>
  );
};

export default EditUserBio;
