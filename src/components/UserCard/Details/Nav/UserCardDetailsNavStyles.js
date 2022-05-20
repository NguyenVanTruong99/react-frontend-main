const styles = {
  gridContainer: {
    height: {
      md: 60,
    },
    borderBottom: theme => `1px solid #${theme.palette.grey.B800}`,
    backgroundColor: theme => theme.palette.background.paper,
  },
  wrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imgWrapper: {
    ml: 4,
    borderRadius: theme => theme.shape.borderRadius * 0.5,
    overflow: "hidden",
    display: {
      xs: "none",
      md: "block",
    },
  },
  iconWrapper: {
    borderRadius: theme => theme.shape.borderRadius * 2,
    backgroundColor: theme => theme.palette.grey[100],
    padding: 0,
    mx: 1,
    ml: 2,
  },
  textWrapper: {
    mr: {
      xs: 4,
      md: 0,
    },
  },
  buttonWrapper: {
    height: "100%",
    display: {
      xs: "block",
      md: "flex",
    },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    mr: {
      xs: 1,
      md: 4,
    },
    mb: {
      xs: 4,
      md: 0,
    },
    ml: {
      xs: 1,
      md: 0,
    },
    mt: {
      xs: 1,
      md: 0,
    },
  },
  button: {
    width: {
      xs: "100%",
      md: "auto",
    },
  },
};

export default styles;
