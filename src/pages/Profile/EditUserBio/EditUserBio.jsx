import "./EditUserBio.css";

const EditUserBio = ({
  editFormInactive,
  updatedUserDetails,
  setUpdatedUserDetails,
}) => {
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
