const styles = {
  container: {
    marginBottom: theme => theme.spacing(8),
  },
  control: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  slider: {
    height: "1px",
    width: "99%",
  },
  label: {
    color: theme => theme.palette.grey.B200,
    marginBottom: theme => theme.spacing(1),
  },
  input: {
    border: 1,
    borderColor: theme => theme.palette.grey.B900,
    padding: theme => theme.spacing(0.5),
    textAlign: "center",
  },
  select: {
    width: "100%",
  },
};

export default styles;
