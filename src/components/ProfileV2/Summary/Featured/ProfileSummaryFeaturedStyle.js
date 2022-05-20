const style = {
  featuredContainer: {
    width: "100%",
  },
  featuredTitle: {
    py: 2,
  },
  featuredList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    "div:nth-of-type(2n)": {
      ml: "20px",
    },
  },
  featuredItemBox: {
    width: "calc(50% - 10px)",
    mb: 2,
  },
};

export default style;
