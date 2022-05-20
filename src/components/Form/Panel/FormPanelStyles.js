const styles = {
  heading: {
    fontWeight: "bold",
    marginBottom: theme => theme.spacing(4),
  },
  form: {
    padding: theme => theme.spacing(4, 2, 1, 2),
    border: "1px solid #dfdfdf",
    marginBottom: theme => theme.spacing(1),
    display: {
      sm: "flex",
    },
    flexDirection: {
      sm: "column",
      md: "row",
    },
  },
  button: {
    width: {
      xs: "100%",
      md: 200,
    },
    marginBottom: theme => theme.spacing(4),
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme => theme.spacing(1, 0, 0, 0),
  },
};

export default styles;
