const styles = {
  container: {
    display: "block",
    height: "max-content",
    minHeight: "250px",
    maxHeight: {
      xs: "85%",
      md: "100%",
    },
    overflowY: "auto",
    overflowX: "hidden",
    margin: "0 auto",
    position: "absolute",
    maxWidth: "861px",
    minWidth: "300px",
    width: {
      xs: "85%",
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
  light: {
    background: theme => theme.palette.background.white,
  },
  dark: {
    color: theme => theme.palette.text.white,
    background: theme => theme.palette.background.blackAlt,
  },
};

export default styles;
