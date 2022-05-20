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
    height: "20%",
    minHeight: "180px",
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
    height: "50px",
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
};

export default styles;
