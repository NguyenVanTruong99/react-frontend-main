import NoxxBg from "assets/images/Bg-md-nopattern.png";

const styles = {
  headerImageBox: {
    height: { md: 150, xs: 120 },
    width: "100vw",
    position: "absolute",
    left: 0,
    top: { md: 80, sm: 107, xs: 67 },
    background: `url(${NoxxBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
  },
  headerImage: {
    width: "50%",
    display: "flex",
    position: "absolute",
    overflow: "hidden",
    right: 0,
    bottom: -1,
    paddingBottom: "2px",
    zIndex: 2,
  },
  headerContentBox: {
    position: "absolute",
    zIndex: 5,
    width: { md: "100%", xs: "244px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default styles;
