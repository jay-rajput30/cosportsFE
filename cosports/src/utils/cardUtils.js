export const getDateFormat = (date) => {
  const formatDate = new Date(date);

  return `  ${formatDate.getDate()}/${
    formatDate.getMonth() + 1
  }/${formatDate.getFullYear()}`;
};

export const getUserInitials = (firstName, lastName = "") => {
  // console.log({ firstName, lastName });
  const first = firstName.split("")[0].toUpperCase();

  const last = lastName.length !== 0 ? lastName.split("")[0].toUpperCase() : "";
  return first + last;
};
