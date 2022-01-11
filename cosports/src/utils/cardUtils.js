export const getDateFormat = (date) => {
  const formatDate = new Date(date);

  return `  ${formatDate.getDate()}/${
    formatDate.getMonth() + 1
  }/${formatDate.getFullYear()}`;
};

export const getUserInitials = (firstName, lastName) => {
  return firstName.split("")[0] + lastName.split("")[0];
};
