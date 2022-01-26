import { useState } from "react";

const EditUserFullName = ({
  //   editFormInactive,
  updatedUserDetails,
  setUpdatedUserDetails,
}) => {
  const [newFullName, setNewFullName] = useState();
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
