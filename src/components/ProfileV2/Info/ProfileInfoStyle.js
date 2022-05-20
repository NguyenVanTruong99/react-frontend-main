const style = {
  profileInfoContainer: {
    height: { lg: 188, md: "auto" },
    width: "100%",
  },
  profileInfoBox: {
    position: "relative",
    backgroundColor: theme => theme.palette.background.white,
    width: "100%",
    height: "100%",
    px: 2,
    borderRadius: "8px",
  },

  profileInfoBgBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    right: 0,
  },

  profileInfoContentBox: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileInfoBg: {
    position: "absolute",
    width: "100%",
    right: 0,
    bottom: 0,
    filter: "brightness(1.5)",
  },
  profileInfoAvatarBox: {
    position: "relative",
    top: { lg: 56, xs: -20 },
  },
  profileInfoCardBox: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    height: "76px",
    top: { lg: 130, xs: -8 },
    zIndex: 2,
  },
  profileInfoMainBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: { lg: "calc(100% - 164px)", md: "100%" },
    height: { lg: "100%", md: "calc(100% - 60px)" },
    position: { lg: "absolute", xs: "relative" },
    left: { lg: 164, md: 0 },
    top: { lg: 0, xs: -16 },
    px: 2,
    pt: 2,
    pb: { lg: 2, xs: 0 },
  },
};

export default style;
