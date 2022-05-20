const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: 80,
    justifyContent: "space-between",
  },
  dot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    borderRadius: 10,
    border: 1,
    borderColor: theme => theme.palette.grey.B900,
    background: theme => theme.palette.grey.B100,
  },
  selectedDot: {
    display: "block",
    borderRadius: 10,
    width: 12,
    height: 12,
    background: theme => theme.palette.blue.main,
  },
};

export default styles;
