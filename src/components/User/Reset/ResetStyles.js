const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme => theme.spacing(1, 3, 3, 3),
    color: theme => theme.palette.grey.B200,
    position: "relative",
  },
  submitButton: {
    margin: theme => theme.spacing(2, 0, 0, 0),
  },
  input: {
    border: "5px solid red",
    margin: theme => theme.spacing(2, 0, 2, 0),
  },
  textField: {
    marginTop: theme => theme.spacing(2),
  },
};

export default styles;
