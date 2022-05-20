const styles = {
  switchWrapper: {
    p: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: theme => `1px solid ${theme.palette.divider}`,
  },
  footer: {
    p: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: theme => `1px solid ${theme.palette.divider}`,
  },
  resultsWrapper: {
    backgroundColor: theme => theme.palette.background.paper,
    position: "absolute",
    zIndex: 40,
    width: "100%",
    border: theme => `1px solid ${theme.palette.divider}`,
    mt: 12,
  },
  resultsList: {
    height: 380,
    maxHeight: "100%",
    overflow: "auto",
  },
};

export default styles;
