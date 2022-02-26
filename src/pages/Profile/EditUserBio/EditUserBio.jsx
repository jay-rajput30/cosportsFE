import "./EditUserBio.css";
// import { useSelector } from "react-redux";

const EditUserBio = ({
  editFormInactive,
  updatedUserDetails,
  setUpdatedUserDetails,
}) => {
  // const user = useSelector((state) => state.user);
  // const { bio } = user.userDetail.userAccountDetails;

  return (
    <div className="user--bio--container">
      <input
        type="text"
        value={updatedUserDetails.newBio}
        onChange={(e) =>
          setUpdatedUserDetails((prev) => ({ ...prev, newBio: e.target.value }))
        }
      />
    </div>
  );
};

export default EditUserBio;
