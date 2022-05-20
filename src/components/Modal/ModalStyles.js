const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 600,
    minWidth: 300,
    bgcolor: "background.white",
    border: 1,
    borderColor: theme => theme.palette.grey.B600,
    boxShadow:
      "0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);",
    borderRadius: 2,
    overflow: "auto",
    maxHeight: "75%",
  },
  header: {
    borderBottom: 1,
    borderColor: theme => theme.palette.grey.B400,
    padding: theme => theme.spacing(2, 2, 3, 2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    padding: theme => theme.spacing(1, 2, 0, 2),
    borderBottom: 1,
    borderColor: theme => theme.palette.grey.B400,
  },
  footer: {
    p: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeIcon: {
    color: theme => theme.palette.text.primary,
    padding: theme => theme.spacing(0.5),
    backgroundColor: theme => theme.palette.background.button,
  },
};

export default styles;
