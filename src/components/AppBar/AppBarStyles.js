const styles = {
  appBar: {
    boxShadow: theme => `0 1px 0 ${theme.palette.grey.B800}`,
    padding: theme => theme.spacing(1, 0),
    background: theme => theme.palette.background.white,
  },
  toolbar: {
    minHeight: "initial",
    paddingLeft: theme => theme.spacing(1),
    paddingRight: 0,
  },
};

export default styles;
