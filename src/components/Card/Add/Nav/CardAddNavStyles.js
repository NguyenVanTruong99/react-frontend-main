const styles = {
  nav: {
    position: "fixed",
    width: "100%",
    zIndex: 2000,
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme => theme.palette.background.paper,
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: theme => `1px solid #${theme.palette.grey.B800}`,
  },
  stepWrapper: {
    display: {
      xs: "none",
      md: "flex",
    },
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    mr: 4,
    width: 90,
  },
  divider: {
    height: 2,
    width: 20,
  },
};

export default styles;
