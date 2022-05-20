// import theme from "theme"

const styles = {
  container: {
    marginBottom: theme => theme.spacing(3),
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
    color: theme => theme.palette.text.primary,
  },
};

export default styles;
