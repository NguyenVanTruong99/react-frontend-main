const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme => theme.spacing(1, 3, 3, 3),
    color: theme => theme.palette.grey.B200,
    position: "relative",
  },
  message: {
    margin: theme => theme.spacing(2, 3, 0, 3),
    color: theme => theme.palette.grey.B200,
  },
  submitButton: {
    margin: theme => theme.spacing(2, 0, 2, 0),
  },
  input: {
    border: "5px solid red",
    margin: theme => theme.spacing(2, 0, 2, 0),
  },
  textField: {
    marginTop: theme => theme.spacing(2),
  },
  socialLogin: {
    borderTop: theme => `1px solid ${theme.palette.grey.B300}`,
    width: "100%",
  },
};

export default styles;
