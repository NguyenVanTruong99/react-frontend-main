const style = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  sectionHeader: {
    mb: 2,
  },
  innerContainer: {
    background: theme => theme.palette.background.white,
    borderRadius: 2,
    px: 1,
  },
  innerHeaderBox: {
    p: 2,
    pb: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: { xs: "space-between", md: "flex-start" },
  },
  innerHeaderTitle: {
    fontWeight: 600,
  },
  eyeButton: {
    backgroundColor: theme => theme.palette.background.white,
    border: "1px solid #D9DADD!important",
    ml: 2,
    width: 40,
    height: 40,
  },
  avatarIconOn: {
    color: theme => theme.palette.blue.main,
    width: 20,
  },
  avatarIconOff: {
    color: theme => theme.palette.grey.B700,
    width: 20,
  },
  tableCellBoxRoot: {
    p: 0,
  },
  tableCellLabel: {
    color: theme => theme.palette.grey.B500,
  },
  tableCellBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  tableCellImageBox: {
    width: 70,
    height: 70,
    mr: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme => theme.palette.background.grey,
  },
  tableCellImage: {
    height: "80%",
  },
  tableCellInfoBox: {
    py: 4,
    display: "flex",
    flexDirection: "column",
  },
  tableCellFeatured: {
    px: 0,
    width: 60,
  },
  showcaseTitle: {
    fontWeight: 600,
  },
  showcaseDetails: {
    color: theme => theme.palette.grey.B600,
  },
};

export default style;
