import BG from "assets/images/backgrounds/SignInModalBg.png";
import BgPattern from "assets/images/Bg-md-pattern.png";

const styles = {
  Container: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%,-50px)",
    borderRadius: "8px",
    width: {
      xs: "100%",
      md: 400,
    },
    background: `url(${BG})`,
    backgroundSize: '100% 100%',
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    maxHeight: "calc(100% - 35px)",
    overflowY: "hidden",
  },
  Top: {
    background: `url(${BgPattern})`,
    backgroundSize: "100% 100%",
    height: "60px",
    backgroundRepeat: "no-repeat",
  },
  Mid: {
    position: "relative",
    top: "60px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  Buttons: {
    position: "relative",
    top: "60px",
    display: "flex",
    justifyContent: "space-evenly",
    px: 2,
    pt: 2,
  },
  authNav: {
    container: {
      display: "flex",
      flexDirection: "row",
      mx: 2,
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
        color: "black",
        padding: "0",
        cursor: "pointer",
      },
      other: {
        margin: theme => theme.spacing(1, 1, 0, 1),
        color: theme => theme.palette.text.blackAlt,
        cursor: "pointer",
      },
    },
  }
};

export default styles;
