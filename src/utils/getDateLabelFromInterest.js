const getDateLabelFromInterest = interest => {
  switch (interest) {
    case "Modern":
      return "1972-2016";
    case "Vintage":
      return "1971 & Earlier";
    case "Ultra Modern":
      return "2017-present";
    default:
      return null;
  }
};

export { getDateLabelFromInterest };
