const removeAt = str => {
  if (str.charAt(0) === "@") {
    return str.substring(1);
  }
  return str;
};

const getSocialUrl = (service, userName) => {
  switch (service) {
    case "ebay":
      return `https://www.ebay.com/usr/${userName}`;
    case "myslabs":
      return `https://myslabs.com/browse/account/?owner=${userName}`;
    case "starstock":
      return `https://www.starstock.com/users/${userName}`;
    case "instagram":
      return `https://www.instagram.com/${removeAt(userName)}`;
    case "twitter":
      return `https://www.twitter.com/${userName}`;
    case "facebook":
      return `https://www.facebook.com/${userName}`;
    case "snapchat":
      return `https://www.snapchat.com/${userName}`;
    case "tiktok":
      return `https://www.tiktok.com/${userName}`;
    case "youtube":
      return `https://www.youtube.com/c/${userName}`;
    case "whatnot":
      return `https://www.whatnot.com/user/${userName}`;
    default:
      return "#";
  }
};

export { getSocialUrl };
