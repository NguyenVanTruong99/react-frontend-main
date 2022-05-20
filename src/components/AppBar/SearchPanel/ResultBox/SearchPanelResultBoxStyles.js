const styles = {
  container: {
    borderBottom: "1px solid",
    borderColor: theme => theme.palette.grey.B400,
    padding: theme => theme.spacing(2),
  },
  list: {
    display: "flex",
  },
  title: {
    fontSize: "15px", // @todo remove
    fontWeight: "bold",
    maxWidth: {sm: "60%", xs: "48%"}
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  arrow: {
    color: theme => theme.palette.blue.main,
  },
  link: {
    display: "flex",
    alignItems: "center",
  },
};

export default styles;
