import NoxxBg from "assets/images/Bg-md-nopattern.png";

const styles = {
  headerImageBox: {
    height: "150px",
    width: "100vw",
    position: "absolute",
    left: 0,
    top: { md: 80, xs: 67 },
    background: `url(${NoxxBg})`,
    backgroundSize: { md: "100% 100%", xs: "cover" },
    backgroundRepeat: "repeat",
  },
  headerImage: {
    width: "50%",
    position: "absolute",
    overflow: "hidden",
    right: 0,
    bottom: -1,
    paddingBottom: "2px",
    zIndex: 2,
  },
  headerContentBox: {
    position: "absolute",
    zIndex: 3,
    width: "100%",
    top: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontWeight: {
      xs: 600,
      md: "bold",
    },
    width: {
      xs: "275px",
      md: "auto",
    },
    fontSize: {
      xs: 34,
      md: 50,
    },
    position: "relative",
    left: {
      xs: "20px",
      md: "0px",
    },
  },
};

export default styles;
