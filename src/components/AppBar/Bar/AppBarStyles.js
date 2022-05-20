import theme from "theme.js";

const styles = {
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    color: theme => theme.palette.text.black,
    item: {
      textDecoration: "none",
      margin: theme.spacing(0, 1, 0, 1),
      padding: theme.spacing(1, 0, 1, 0),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.grey.B500,
      textAlign: "center",
      fontWeight: "500",
      active: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textDecoration: "none",
        composes: "border",
        color: theme.palette.text.primary,
        borderBottom: "3px solid " + theme.palette.text.primary,
        margin: theme.spacing(0, 1, 0, 1),
        padding: theme.spacing(1, 0, 1, 0),
        fontWeight: "600",
      },
    },
    spacer: {
      margin: theme => theme.spacing(2, 1),
      borderLeft: "1px solid " + theme.palette.grey.B600,
      fontSize: "1rem",
    },
    search: {
      display: "flex",
      alignItems: "center",
      border: theme => `1px solid ${theme.palette.grey.B200}`,
      borderRadius: "8px",
      padding: "0 8px",
      width: "100%",
      "&:hover": {
        background: theme.palette.grey.B400,
      },
    },
    box: {
      display: "flex",
      justifyContent: "center",
      color: theme => theme.palette.text.black,
      "&:hover a": {
        borderBottom: "3px solid " + theme.palette.grey.B500,
        cursor: "pointer",
      },
    },
  },
};

export default styles;
