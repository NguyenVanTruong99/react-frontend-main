import BgPattern from "assets/images/Bg-med-pattern.png";
import Outline from "assets/images/notches/outline-only.png";

const styles = {
  container: {
    position: "absolute",
    top: 70,
    left: "50%",
    transform: "translate(-50%,-50px)",
    width: {
      xs: "100%",
      md: 700,
    },
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
  },
  // p: 4,
  maxHeight: "calc(100% - 35px)",
  overflowY: "auto",
  modal: {
    position: "absolute",
    top: 70,
    left: "50%",
    transform: "translate(-50%,-50px)",
    borderRadius: "8px",
    width: {
      xs: "100%",
      md: 700,
    },
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    maxHeight: "calc(100% - 35px)",
    overflowY: "hidden",
  },
  Top: {
    background: `url(${BgPattern})`,
    backgroundSize: "100% 100%",
    height: "150px",
    backgroundRepeat: "no-repeat",
  },
  Mid: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "40%",
    height: "100%",
  },
  Outline: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "95px",
    width: "95px",
    background: `url(${Outline})`,
    backgroundSize: "100% 100%",
  },
  title: {
    mt: 5,
    textAlign: "center",
  },
  footer: {
    p: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default styles;
