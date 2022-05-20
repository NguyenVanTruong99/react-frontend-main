import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { IconButton } from "@mui/material";

const RouteModalCloseButtonView = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      borderRadius: theme => theme.shape.borderRadius * 2,
      padding: 0.5,
      backgroundColor: theme => theme.palette.grey[100],
    }}
  >
    <ClearRoundedIcon />
  </IconButton>
);

export default RouteModalCloseButtonView;
