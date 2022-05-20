const useStyle = (selectable, numColumns) => ({
  cardDetail: {
    cursor: "pointer",
    position: "sticky",
    left: selectable ? 43.7 : 0,
    backgroundColor: theme => theme.palette.background.white,
    width: 102,
  },
  checkboxCell: {
    padding: 0,
    width: 16,
    color: theme => theme.palette.grey.B200,
    position: "sticky",
    left: 0,
    backgroundColor: theme => theme.palette.background.white,
  },
  cardTableCell: {
    width: `calc(100%/${numColumns})`,
  },
  menuHeader: {
    fontSize: "13px",
  },
});

export default useStyle;
