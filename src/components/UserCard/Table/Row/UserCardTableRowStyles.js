const styles = {
  cardDetail: {
    cursor: "pointer",
    position: "sticky",
    left: 43.7,
    zIndex: 2,
    backgroundColor: theme => theme.palette.background.white,
  },
  checkboxCell: {
    padding: 0,
    width: 16,
    position: "sticky",
    left: 0,
    backgroundColor: theme => theme.palette.background.white,
    color: theme => theme.palette.grey.B200,
  },
  clickable: {
    background: theme => theme.palette.background.white,
    cursor: "pointer",
    "&:hover": {
      background: theme => theme.palette.background.button,
    },
    "&:hover td": {
      background: theme => theme.palette.background.button,
    },
  },
};

export default styles;
