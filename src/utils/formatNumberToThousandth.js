const formatNum = num => {
  let base = "";
  if (num >= 1000000) {
    return String(Math.floor(num / 1000000)) + "m";
  } else if (num >= 1000) {
    return String(Math.floor(num / 1000)) + "k";
  }
  return num.toLocaleString();
};

export default formatNum;
