const formatPlayerStatus = status => {
  switch (status) {
    case "ACT":
      return "Active";
    case "RET":
      return "Retired";
    default:
      return status;
  }
};

export default formatPlayerStatus;
