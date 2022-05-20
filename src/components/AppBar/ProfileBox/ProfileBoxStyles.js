const styles = {
  button: {
    marginLeft: 0,
    margin: theme => theme.spacing(1),
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "10%",
    right: "1%",
    width: 200,
    bgcolor: "background.paper",
    padding: theme => theme.spacing(0),
    border: theme => "1px solid " + theme.palette.grey.B400,
    borderRadius: "8px",
    outline: "none",
    popup: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper",
      borderRadius: "8px",
      button: {
        padding: theme => theme.spacing(1, 2),
      },
    },
  },
  mobileModal: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "146px",
    left: "25px",
    width: 200,
    bgcolor: "background.paper",
    padding: theme => theme.spacing(0),
    border: theme => "1px solid " + theme.palette.grey.B400,
    borderRadius: "8px",
    outline: "none",
    popup: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper",
      borderRadius: "8px",
      button: {
        padding: theme => theme.spacing(1, 2),
      },
    },
  },
};

export default styles;
