const styles = {
  container: {
    // border: 1,
    borderRadius: "4px",
    // borderColor: theme => theme.palette.grey.B400,
    background: theme => theme.palette.background.white,
    padding: theme => theme.spacing(2, 0, 0, 0),
    width: "100%",
  },
  toolbarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toolbarText: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    alignItems: "flex-start",
    padding: theme => theme.spacing(0, 2, 3, 2),
  },
  headCell: {
    color: theme => theme.palette.grey.B200,
  },
  headCellActive: {
    color: theme => theme.palette.text.primary,
  },
  cellContent: {
    display: "flex",
    alignItems: "center",
  },
  checkboxCell: {
    padding: 0,
    width: 16,
    color: theme => theme.palette.grey.B200,
    position: "sticky",
    left: 0,
    backgroundColor: theme => theme.palette.background.white,
  },
  noCheckboxLabel: { left: 0 },
  cardTitle: {
    position: "sticky",
    left: 43.7,
    backgroundColor: theme => theme.palette.background.white,
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "flex-end",
    color: theme => theme.palette.grey.B200,
    alignItems: "center",
    borderBottom: "0",
    ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
      // fontWeight: "bold",
      // color: "blue"
    },
    ".MuiTablePagination-input": {
      margin: theme => theme.spacing(0, 2, 0, 0),
    },
    ".MuiTablePagination-select": {
      color: theme => theme.palette.text.primary,
    },
    ".MuiButtonBase-root": {
      width: 30,
      height: 30,
      marginRight: theme => theme.spacing(1),
      color: theme => theme.palette.text.primary,
    },
    ".MuiButtonBase-root, .Mui-disabled": {
      backgroundColor: theme => theme.palette.background.button,
    },
    ".Mui-disabled": {
      color: "rgba(0, 0, 0, 0.26)",
    },
  },
};

export default styles;
