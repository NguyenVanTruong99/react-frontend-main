const styles = {
  textContainer: {
    alignItems: "center",
    display: "flex",
    fontWeight: 600,
  },
  icon: {
    backgroundColor: theme => theme.palette.background.greyAlt,
    borderRadius: "4px",
    color: theme => theme.palette.white.main,
    height: "16px",
  },
  iconButton: {
    padding: 0,
    margin: 0,
  },
  separator: {
    color: theme => theme.palette.background.greyAlt,
    padding: theme => theme.spacing(0, 1, 0, 1),
  },
  mutedItem: {
    color: theme => theme.palette.grey.B200,
  },
};

export default styles;
