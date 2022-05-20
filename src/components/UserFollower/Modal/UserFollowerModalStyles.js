const styles = {
  nav: {
    display: "flex",
    padding: theme => theme.spacing(1),
  },
  navList: {
    display: "flex",
    flexDirection: "row",
    padding: theme => theme.spacing(0.25),
    backgroundColor: theme => theme.palette.grey.B300,
    borderRadius: "5px",
    width: "100%",
    alignItems: "center",
    border: 1,
    borderColor: theme => theme.palette.grey.B300,
  },
  navListItem: {
    padding: 0,
    fontSize: "12px",
    color: theme => theme.palette.grey.B500,
    flexGrow: 1,
    height: "36px",
    justifyContent: "center",
    borderRadius: "4px",
    "&.Mui-selected": {
      color: theme => theme.palette.text.primary,
      backgroundColor: theme => theme.palette.background.white,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
      border: 1,
      borderColor: theme => theme.palette.grey.B400,
      "&:hover": {
        backgroundColor: theme => theme.palette.background.white,
      },
    },
  },
};

export default styles;
