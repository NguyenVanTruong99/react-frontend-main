import BgBottom from "assets/images/Bg-white-border.png";

const styles = {
  gridContainer: {
    mt: 2,
    width: "100vw",
    position: {
      md: "relative",
    },
    marginLeft: { md: -4, xs: -2 },
    background: `url(${BgBottom})`,
    backgroundSize: { xs: "250% 90%", md: "100% 100%" },
    backgroundPosition: { xs: "-15px 100%", md: "0% 100%" },
    // borderBottom: theme => `1px solid #${theme.palette.grey.B800}`,
    // backgroundColor: theme => theme.palette.background.paper
  },
  shareButton: {
    position: "absolute",
    top: { md: "24px", sm: "134px", xs: "86px" },
    right: { md: "58px", xs: "12px" },
    zIndex: 1,
  },
  row: {
    mt: 4,
    alignItems: "center",
    width: {
      md: "80%",
      xs: "100%",
    },
  },
  buttons: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    width: {
      xs: "100%",
      md: "80%",
    },
  },
  imageViewerWrapper: {
    backgroundColor: theme => theme.palette.grey[200],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    width: "100%",
    height: "480px",
    pb: {
      xs: 0,
      md: 0,
    },
    top: {
      xs: 65,
      md: 0,
    },
    mine: {
      backgroundColor: theme => theme.palette.grey[200],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 0,
      width: "100%",
      height: "520px",
      pb: {
        xs: 0,
        md: 12,
      },
      top: {
        xs: 65,
        md: 0,
      },
    },
  },
  gradeBox: {
    mr: 4,
  },
  gradeInfoTopText: {
    textAlign: "left",
  },
  gradeInfoBottomText: {
    textAlign: "left",
  },
  playerLinkWrapper: {
    marginTop: 5,
    transform: "rotate(45deg)",
  },
};

export default styles;
