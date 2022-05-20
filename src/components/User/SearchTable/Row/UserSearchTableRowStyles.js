const styles = {
  cardDetail: {
    cursor: "pointer",
  },
  checkboxCell: {
    padding: 0,
    width: 16,
    color: theme => theme.palette.grey.B200,
  },
  clickable: {
    cursor: "pointer",
    "&:hover": {
      background: theme => theme.palette.background.button,
    },
  },
};

export default styles;
