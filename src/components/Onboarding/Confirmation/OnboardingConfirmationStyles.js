const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
    flexDirection: "column",
    width: {
      xs: "100%",
      md: "100%",
    },
    // height: {
    //   xs: '834px',
    //   md: '100%'
    // },
    bgcolor: "#101010",
    backgroundRepeat: "no-repeat",
    backgroundSize: "417px auto",
    backgroundPosition: "top left",
    maxWidth: "1200px",
    minHeight: "734px",
    borderRadius: "8px",
  },
  paddingBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0 auto",
    flexDirection: "column",
    overflow: "auto",
    width: "100%",
    px: {
      xs: 2,
      md: 0,
    },
  },
  bgTop: {
    position: "absolute",
    width: "422px",
    top: 0,
    left: 0,
    userSelect: "none",
  },
  bgBottom: {
    position: "absolute",
    width: "422px",
    bottom: 0,
    right: 0,
    userSelect: "none",
  },
  noxxLogo: {
    height: '45px',
    marginTop: "24px",
  },
  header: {
    fontWeight: 600,
    width: "100%",
    textAlign: {
      xs: "left",
      md: "center",
    },
    marginTop: {
      xs: "26.64px",
      md: "47.64px",
    },
  },
  subheader: {
    marginTop: "8px",
    width: {
      xs: "100%",
      md: "460px",
    },
    textAlign: {
      xs: "left",
      md: "center",
    },
    color: "#9e9e9e",
  },
  bodyContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    marginTop: { xs: "20px", md: "64px" },
    width: { xs: "311px", md: "829px" },
    height: { xs: "490px", md: "353px" },
  },
  section1: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: { xs: "row", md: "column" },
    marginLeft: "10px",
    marginRight: "10px",
    py: { xs: "20px", md: 0 },
    borderBottom: { xs: "1px solid #424242", md: "none" },
  },
  section2: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: { xs: "row-reverse", md: "column" },
    marginLeft: "10px",
    marginRight: "10px",
    py: { xs: "20px", md: 0 },
    borderBottom: { xs: "1px solid #424242", md: "none" },
  },
  section3: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: { xs: "row", md: "column" },
    marginLeft: "10px",
    marginRight: "10px",
    py: { xs: "20px", md: 0 },
  },
  imageBox: {
    width: { xs: "80px", md: "170px" },
    marginRight: "12px",
  },
  image: {
    width: "100%",
  },
  sectionText: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    marginTop: "31px",
  },
  sectionTextParagraph: {
    color: "#9E9E9E",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
  },
  buttonBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  confirmButton: {
    fontSize: "17px",
    fontWeight: 400,
    width: "249px",
    marginTop: "27px",
    marginBottom: "26.64px",
  },

  // header: {
  //   textAlign: 'center',
  //   margin: {
  //     xs: theme => theme.spacing(4, 4, 0, 4),
  //     md: theme => theme.spacing(0, 4, 0, 4)
  //   }
  // },
  // box: {
  //   border: 2,
  //   borderColor: theme => theme.palette.white.main,
  //   borderRadius: '6px',
  //   height: 150,
  //   width: 150,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'column',
  //   textAlign: 'center',
  //   padding: 2,
  //   marginBottom: {
  //     xs: 2,
  //     md: 4
  //   },
  // },
  // img: {
  //   width: 30,
  //   height: 30,
  //   marginRight: 6
  // },
  // progressWrap: {
  //   width: '100%',
  //   marginBottom: 2
  // },
  // progressBar: {
  //   height: 5,
  //   borderRadius: 5,
  //   backgroundColor: theme => theme.palette.grey.B400
  // },
  // progressFill: {
  //   height: '100%',
  //   display: 'block',
  //   borderRadius: 5,
  //   backgroundColor: theme => theme.palette.success.main,
  //   width: '50%'
  // }
};

export default styles;
