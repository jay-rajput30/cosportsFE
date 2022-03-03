const EditUserFullName = ({ updatedUserDetails, setUpdatedUserDetails }) => {
  return (
    <div className="user--fullname--container ">
      <input
        type="text"
        value={updatedUserDetails.newFullName}
        onChange={(e) =>
          setUpdatedUserDetails((prev) => ({
            ...prev,
            newFullName: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default EditUserFullName;
