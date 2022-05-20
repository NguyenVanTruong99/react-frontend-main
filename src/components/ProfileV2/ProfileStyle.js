const style = {
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 0,
  },
  profileBannerBox: {
    width: "100%",
    height: { md: "330px", xs: "176px" },
    mt: { md: 2, xs: 1 },
    px: { lg: 10, xs: 0 },
    pt: { lg: 4, sm: 2, xs: 0.5 },
    overflow: "hidden",
    boxSizing: "border-box",
  },
  profileContentContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    top: -40,
    px: { lg: 12, xs: 1 },
  },
  profileContentModules: {
    width: "100%",
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    justifyContent: "flex-start",
    px: { sm: 2, xs: 0 },
  },

  profileContentModulesMiddleContainer: {
    width: { md: "calc(100% - 453px)", xs: "100%" },
    mx: { md: 4, xs: 0 },
    borderRadius: 2,
  },

  profileContentModulesRightContainer: {
    width: 289,
    borderRadius: 2,
  },
};

export default style;
