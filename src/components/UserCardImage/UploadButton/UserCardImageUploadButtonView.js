import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { SpeedDialAction } from "@mui/material";

const UserCardImageUploadButtonView = ({ onClick, disabled }) => (
  <SpeedDialAction
    FabProps={{
      disabled: disabled,
    }}
    icon={<PhotoCameraIcon />}
    tooltipTitle={"Upload"}
    onClick={onClick}
    tooltipOpen
  />
);

export default UserCardImageUploadButtonView;
