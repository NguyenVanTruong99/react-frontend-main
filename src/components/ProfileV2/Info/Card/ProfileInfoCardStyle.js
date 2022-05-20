const style = {
  infoCardBox: {
    width: { lg: 116, xs: 68 },
    height: { lg: 76, xs: 58 },
    ml: { md: 1, xs: 0.5 },
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: {
      lg: "none",
      md: "0px -5px 12px rgba(0, 0, 0, 0.6)",
      xs: "0px -5px 12px rgba(0, 0, 0, 0.6)",
    },
    clipPath: {
      sm: "inset(0px 0px -15px 0px)",
      xs: "inset(0px 0px -15px 0px)",
    },
  },
  infoCardImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  infoValue: {
    zIndex: 1,
    fontWeight: 600,
    fontSize: { lg: "36px", xs: "18px" },
  },
  infoLabel: {
    zIndex: 1,
    color: theme => theme.palette.grey.A700,
    textAlign: "center",
    fontSize: { xs: "10px", lg: "14px" },
  },
  showcaseValueBox: {
    height: 22,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default style;
