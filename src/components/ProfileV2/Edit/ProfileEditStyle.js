const style = {
  editModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  editContainer: {
    background: theme => theme.palette.background.white,
    display: "block",
    height: "max-content",
    minHeight: 200,
    maxHeight: {
      xs: "100%",
      md: "100%",
    },
    overflowY: "auto",
    overflowX: "hidden",
    margin: "0 auto",
    position: "absolute",
    maxWidth: "704px",
    minWidth: "300px",
    width: {
      xs: "100%",
      md: "75%",
    },
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 1,
    p: {
      xs: 0,
      md: 0,
    },
    boxShadow: "0px 9px 46px 8px rgb(0 0 0 / 24%)",
  },
  editContentBox: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0 auto",
    flexDirection: "column",
    width: "100%",
    borderRadius: 1,
  },
  iconButton: {
    width: 20,
    height: 20
  },
  closeIcon: {
    width: 11.67,
    height: 11.67,
    color: theme => theme.palette.black
  },
  headerBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    px: 2,
    py: 3,
  },
  headerTitle: {
    color: theme => theme.palette.grey.B200,
    fontWeight: 600
  }
};

export default style;