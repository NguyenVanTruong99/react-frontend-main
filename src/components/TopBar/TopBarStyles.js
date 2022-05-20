const styles = {
  container: {
    background: theme => theme.palette.background.black,
    padding: theme => theme.spacing(2),
    marginTop: theme => theme.spacing(2),
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 75px 100%, 0 60px)",
    borderBottom: "3px solid",
    borderBottomColor: theme => theme.palette.accents.orange,
    zIndex: "-1",
    height: "100px",
  },
  frame: {
    background: theme => theme.palette.background.black,
  },
  logo: {
    textAlign: "center",
    marginBottom: theme => theme.spacing(1),
  },
  text: {
    textAlign: "center",
    color: theme => theme.palette.text.white,
    typography: "heading6",
  },
  textLarge: {
    textAlign: "center",
    color: theme => theme.palette.text.white,
    typography: "h4",
    fontWeight: "bold",
    margin: theme => theme.spacing(1),
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme => theme.spacing(4, 0, 0, 0),
    margin: theme => theme.spacing(0, 0, 0, 6),
    maxWidth: "250px",
  },
  sublinks: {
    display: "flex",
    justifyContent: "center",
    padding: theme => theme.spacing(4, 0, 0, 0),
    margin: theme => theme.spacing(0, 6, 0, 6),
  },
  link: {
    color: theme => theme.palette.grey.B200,
    margin: theme => theme.spacing(0, 4, 0, 4),
    "&:hover": {
      borderBottom: "3px solid",
      borderBottomColor: theme => theme.palette.accents.orange,
    },
  },
};

export default styles;
