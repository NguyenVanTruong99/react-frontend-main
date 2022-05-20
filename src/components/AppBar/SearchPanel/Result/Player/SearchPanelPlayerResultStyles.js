const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 0,
    paddingRight: 0,
    cursor: "pointer",
  },
  avatar: {
    width: "30px",
    height: "30px",
    marginRight: theme => theme.spacing(1),
  },
  team: {
    color: theme => theme.palette.grey.B200,
    marginRight: theme => theme.spacing(2),
    minWidth: {md: "auto", xs: "70px"},
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
    textAlign: "end",
  },
};

export default styles;
