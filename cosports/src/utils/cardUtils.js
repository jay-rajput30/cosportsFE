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

export const getDayDifference = (date) => {
  console.log({ date });

  const diff = new Date().getTime() - new Date(date).getTime;

  let days = new Date(
    new Date().getTime() - new Date(date).getTime()
  ).getDate();

  if (days > 60) {
    return "few months ago";
  }
  if (days > 30) {
    return "a month ago";
  }
  if (days >= 7) {
    return "a week ago";
  }
  return `${days} day ago`;
};
