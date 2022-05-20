const styles = {
  container: {
    width: "50%",
    borderColor: theme => theme.palette.grey.B900,
    borderRadius: theme => theme.spacing(1),
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
    marginTop: theme => theme.spacing(1),
  },
  containerMobile: {
    width: "100%",
    marginTop: 0,
    px: 0,
  },
  badge: {
    position: "absolute",
    right: 18,
    top: -8,
    background: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeMobile: {
    position: "absolute",
    right: "4px",
    background: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 0,
  },
  profileButton: {
    padding: 0,
    maxWidth: '60px'
  },
};

export default styles;
