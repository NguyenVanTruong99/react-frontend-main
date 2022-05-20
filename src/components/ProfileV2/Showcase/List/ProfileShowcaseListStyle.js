const style = {
  container: {},
  containerLabelBox: {
    py: 2,
  },
  containerLabel: {
    color: theme => theme.palette.grey.B500,
  },
  firstFeaturedBox: {
    width: "100%",
  },
  showcasesBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    "div:nth-of-type(2n)": {
      ml: { xs: 0, sm: "20px", md: 0, lg: "20px" },
    },
  },
  showcaseBox: {
    width: {
      xs: "100%",
      sm: "calc(50% - 10px)",
      md: "100%",
      lg: "calc(50% - 10px)",
    },
    mb: 2,
  },
  showcasesHeaderBox: {
    py: 2,
    display: "flex",
    flexDirection: "row",
  },
  numShowcases: {
    ml: 1,
    color: theme => theme.palette.text.gold,
  },
};

export default style;
