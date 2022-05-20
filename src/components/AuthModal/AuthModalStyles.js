import CardBG from "assets/images/backgrounds/SignInBg.png";

const styles = {
  container: {
    minHeight: "100%",
    padding: theme => theme.spacing(4, 3, 0, 3),
  },
  background: {
    backgroundColor: theme => theme.palette.background.black,
    bottom: 0,
    overflow: "auto",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    zIndex: 1200,
  },
  logoContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme => theme.spacing(4),
  },
  contentContainer: {
    backgroundImage: "url(" + CardBG + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    // borderRadius: "20px",
    margin: "0 auto",
    width: "90%",
    maxWidth: "440px",
  },
  linksContainer: {
    color: theme => theme.palette.text.white,
    display: "flex",
    marginTop: theme => theme.spacing(4),
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    marginBottom: theme => theme.spacing(3),
  },
  authNav: {
    container: {
      display: "flex",
      flexDirection: "row",
      margin: theme => theme.spacing(0, 1, 0, 1),
    },
    text: {
      textDecoration: "none",
      color: theme => theme.palette.text.primary,
    },
    tabs: {
      selected: {
        margin: theme => theme.spacing(1, 1, 0, 1),
        borderBottom: theme => "3px solid " + theme.palette.blue.main,
        borderRadius: 0,
        color: theme => theme.palette.text.blackAlt,
        padding: "0",
      },
      other: {
        margin: theme => theme.spacing(1, 1, 0, 1),
        color: theme => theme.palette.text.blackAlt,
      },
    },
  },
};

export default styles;
