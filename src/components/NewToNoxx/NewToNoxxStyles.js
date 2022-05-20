// import theme from "theme"

const styles = {
  container: {
    padding: theme => theme.spacing(3, 0, 5, 0),
    marginBottom: theme => theme.spacing(5),
    position: "relative",
    zIndex: 2,
    mobile: {},
  },
  textSmall: {
    fontSize: "0.9rem",
    textAlign: "left",
    color: theme => theme.palette.grey.B200,
  },
  textLarge: {
    fontSize: "1.5rem",
    fontWeight: 600,
    textAlign: "left",
    color: theme => theme.palette.text.white,
  },
  mobile: {
    textSmall: {
      fontSize: "0.9rem",
      textAlign: "left",
      color: theme => theme.palette.grey.B200,
    },
    textLarge: {
      fontSize: "1.5rem",
      fontWeight: 800,
      textAlign: "left",
    },
  },
};

export default styles;
