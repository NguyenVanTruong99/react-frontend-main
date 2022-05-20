const style = {
  profilePublicModeBox: {
    width: "100%",
    height: 50,
    backgroundColor: theme => theme.palette.primary.light,
    color: theme => theme.palette.background.main,
    position: "fixed",
    zIndex: 1100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    px: 2,
    top: { xs: 71, md: 80 },
  },
  profilePublicModeCloseBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
  },
  profilePublicModeCloseIcon: {
    height: 16,
  },
};

export default style;
