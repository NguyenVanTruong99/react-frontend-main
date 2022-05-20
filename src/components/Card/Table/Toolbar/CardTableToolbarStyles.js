import { alpha } from "@mui/material/styles";

const styles = {
  container: {
    padding: theme => theme.spacing(0, 2, 0, 0),
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    padding: theme => theme.spacing(0.25),
  },
  button: {
    borderColor: theme => theme.palette.blue.main,
    marginRight: theme => theme.spacing(1),
    marginLeft: theme => theme.spacing(1),
    fontWeight: 500,
    borderRadius: 4,
    height: 40,
    p: 0,
    width: {
      md: 200,
      xs: 40,
    },
    disabled: {
      fontWeight: 500,
      borderColor: theme => theme.palette.blue.main,
      marginRight: theme => theme.spacing(1),
      marginLeft: theme => theme.spacing(1),
      borderRadius: 4,
      opacity: 0.5,
      height: 40,
      p: 0,
      width: {
        md: 200,
        xs: 40,
      },
    },
  },
  avatar: {
    border: 1,
    backgroundColor: theme => theme.palette.background.white,
    borderColor: theme => alpha(theme.palette.blue.main, 0.2),
  },
  menuHeader: {
    fontSize: "13px",
  },
  addCardIcon: {
    filter:
      "invert(47%) sepia(88%) saturate(3382%) hue-rotate(198deg) brightness(102%) contrast(106%)",
  },
};

export default styles;
