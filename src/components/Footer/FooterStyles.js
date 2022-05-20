const styles = {
  container: {
    background: theme => theme.palette.background.black,
    marginTop: "auto",
    position: "absolute",
    bottom: 0,
  },
  iconRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    pl: 5,
    textAlign: "left",
    [theme => theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },
  copyrightText: {
    pl: 5,
    textAlign: "left",
    color: theme => theme.palette.text.white,
    fontSize: { xs: "11px", md: "11px" },
    width: "100%",
  },
  gridIconRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    px: 4,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    padding: 0,
    ml: "auto",
    mr: "0px",
    maxWidth: "250px",
    zIndex: 2,
  },
  link: {
    color: theme => theme.palette.grey.B200,
    mx: "16px",
  },
  middleLinks: {
    color: "#FFFFFF",
    fontSize: { xs: "10px", md: "11px" },
    mx: "10px",
  },
  footerTextBox: {
    width: "100%",
    display: "flex",
    flexDiection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    pb: 2,
    pr: 2,
  },
};

export default styles;
