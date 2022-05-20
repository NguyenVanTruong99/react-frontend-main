import { alpha } from "@mui/material/styles";

const styles = {
  container: {
    padding: theme => theme.spacing(0, 2, 0, 0),
  },
  iconButton: {
    padding: theme => theme.spacing(0.25),
  },
  avatar: {
    border: 1,
    backgroundColor: theme => theme.palette.background.white,
    borderColor: theme => alpha(theme.palette.blue.main, 0.2),
  },
  menuHeader: {
    fontSize: "13px",
  },
};

export default styles;
