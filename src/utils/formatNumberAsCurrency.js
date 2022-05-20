const formatNumberAsCurrency = value =>
  !value
    ? "$0"
    : new Intl.NumberFormat("en", {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        style: "currency",
        currency: "USD",
      }).format(value);

export default formatNumberAsCurrency;
