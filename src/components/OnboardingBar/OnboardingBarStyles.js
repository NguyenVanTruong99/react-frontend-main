const styles = {
  container: {
    height: "100px",
    background: theme => theme.palette.background.white,
    borderBottomColor: theme => theme.palette.accents.orange,
    border: theme => `1px solid ${theme.palette.grey.B200}`,
    borderRadius: {
      sm: "8px",
      xs: "8px 8px 0 0",
    },
    display: "flex",
    alignItems: "center",
    mb: {
      md: 3,
      xs: 6,
    },
    open: {
      height: "100px",
      background: theme => theme.palette.background.white,
      borderBottomColor: theme => theme.palette.accents.orange,
      border: theme => `1px solid ${theme.palette.grey.B200}`,
      borderRadius: "8px 8px 0 0",
      display: "flex",
      alignItems: "center",
    },
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    bgcolor: "background.paper",
    outline: theme => `1px solid ${theme.palette.grey.B200}`,
    width: "100%",
    padding: theme => theme.spacing(0, 1),
    borderRadius: "0 0 8px 8px",
    popup: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper",
      borderRadius: "8px",
      button: {
        padding: theme => theme.spacing(1, 2),
      },
    },
  },
  vl: {
    borderLeft: theme => `1px solid ${theme.palette.grey.B200}`,
  },
  box: {
    textSmall: {
      fontSize: "0.8em",
      fontWeight: "400",
      color: theme => theme.palette.grey.B500,
    },
    textLarge: {
      fontSize: "1.2rem",
    },
    textBlack: {
      fontWeight: "bold",
      color: theme => theme.palette.text.primary,
    },
    button: {
      color: theme => theme.palette.text.primary,
      borderColor: theme => theme.palette.grey.B200,
      fontWeight: "500",
      "&:hover": {
        color: theme => theme.palette.text.primary,
        borderColor: theme => theme.palette.grey.B200,
      },
    },
    boxes: {
      left: {
        height: "100%",
        // width: '100%',
        border: "0px",
        borderRadius: {
          sm: "8px 0 0 8px",
          xs: "8px 8px 0 0",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme => theme.palette.text.white,
        background: theme => theme.palette.grey.B100,
        overflow: "hidden",
        "&:hover": {},
      },
    },
    left: {
      color: theme => theme.palette.text.white,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    right: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderLeft: {
        md: theme => "1px solid" + theme.palette.grey.B400,
        xs: "none",
      },
      py: {
        md: 0,
        xs: 3,
      },
      // border: {
      //   xs: '1px solid #dfdfde',
      //   md: 'none'
      // },
      outline: {
        xs: "1px solid #9fa2b4",
        md: "none",
      },
      borderRadius: {
        xs: "0 0 8px 8px",
      },
    },
    status: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: "90%",
      outline: {
        xs: "1px solid #9fa2b4",
        md: "none",
      },
      background: {
        xs: "white",
        md: "none",
      },
      "& .MuiLinearProgress-root": {
        borderRadius: "8px",
        height: "4px",
      },
    },
    border: {
      height: "60%",
      border: "1px solid",
      borderColor: "#ccc",
      margin: "auto 0",
    },
    lower: {
      green: {
        fontWeight: "1000",
        color: theme => theme.palette.accents.green,
        height: "30px",
      },
      success: {
        color: theme => theme.palette.success.main,
        fontWeight: 800,
        fontSize: "28px",
        marginTop: "-5px",
      },
      red: {
        fontWeight: "800",
        color: theme => theme.palette.accents.red,
        height: "30px",
      },
      black: {
        fontWeight: "800",
        color: theme => theme.palette.text.black,
        height: "30px",
      },
      white: {
        fontWeight: "800",
        color: theme => theme.palette.text.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "30px",
      },
    },
  },
  logo: {
    textAlign: "center",
    marginBottom: theme => theme.spacing(1),
    [theme => theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },
  text: {
    textAlign: "center",
    color: theme => theme.palette.text.black,
    typography: "heading6",
  },
  textLarge: {
    textAlign: "center",
    color: theme => theme.palette.text.black,
    typography: "h4",
    fontWeight: "bold",
    margin: theme => theme.spacing(1),
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme => theme.spacing(4, 0, 0, 0),
    margin: theme => theme.spacing(0, 0, 0, 6),
    maxWidth: "250px",
  },
  sublinks: {
    display: "flex",
    justifyContent: "center",
    padding: theme => theme.spacing(4, 0, 0, 0),
    margin: theme => theme.spacing(0, 6, 0, 6),
  },
  link: {
    color: theme => theme.palette.grey.B200,
    margin: theme => theme.spacing(0, 4, 0, 4),
    "&:hover": {
      borderBottom: "3px solid",
      borderBottomColor: theme => theme.palette.accents.orange,
    },
  },
  mobile: {
    container: {
      borderRadius: "8px 8px 0 0",
      display: "flex",
      alignItems: "center",
    },
    pattern: {
      height: "10vh",
      background: theme => theme.palette.background.white,
    },
    modal: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      borderRadius: "0 0 8px 8px",
      popup: {
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        borderRadius: "8px",
        button: {
          padding: theme => theme.spacing(1, 2),
        },
      },
    },
    boxes: {
      left: {
        height: "75px",
        border: "0px",
        borderRadius: "8px 8px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme => theme.palette.text.white,
        background: theme => theme.palette.grey.B100,
        overflow: "hidden",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    box: {
      left: {
        color: theme => theme.palette.text.white,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        borderRadius: "8px 8px 0 0",

        border: theme => `1px solid ${theme.palette.grey.B200}`,
      },
      status: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        padding: theme => theme.spacing(2),
        borderLeft: theme => `1px solid ${theme.palette.grey.B400}`,
        borderRight: theme => `1px solid ${theme.palette.grey.B400}`,
        borderBottom: theme => `1px solid ${theme.palette.grey.B400}`,
        borderRadius: "0 0 8px 8px",
      },
      button: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: theme => theme.spacing(2),
        color: theme => theme.palette.text.primary,
        border: theme => `1px solid ${theme.palette.grey.B400}`,
        // borderRadius: '0 0 8px 8px',
      },
    },
  },
};

export default styles;
