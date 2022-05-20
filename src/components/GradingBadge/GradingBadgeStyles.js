const styles = {
  container: {
    // display: 'flex',
    position: "relative",
    // maxWidth: 70,
    width: "100%",
  },
  textContainer: {
    // alignItems: 'center',
    // display: 'flex',
    // height: '100%',
    // justifyContent: 'center',
    // position: 'absolute',
    // top: 0,
    width: "100%",
    // flexDirection: 'column',
    position: "absolute",
    zIndex: 4,
    // top: "50%",
    right: "50%",
    transform: "translate(50%,50%)",
    // marginTop: -1 * 0.5,
  },
  badgeWrapper: {
    width: "100%",
    position: "absolute",
    zIndex: 2,
    // top: "50%",
    // right: "50%",
    // transform: "translate(50%,-50%)"
  },
  gradeVendor: {
    textAlign: "center",
    lineHeight: 1,
    color: theme => theme.palette.white.main,
  },
  grade: {
    lineHeight: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: theme => theme.palette.white.main,
  },
};

export default styles;
