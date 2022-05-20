import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import CameraFrontIcon from "@mui/icons-material/CameraFront";
import FlipToBackIcon from "@mui/icons-material/FlipToBack";
import SaveIcon from "@mui/icons-material/Save";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const UserCardDetailsImageEditorSpeedDialView = ({
  open,
  onOpen,
  onClose,
  onRotateClick,
  onSave,
  onFrontClick,
  onBackClick,
  view,
  onUploadClick,
  userCard,
  userCardImage,
}) => (
  <Box>
    <SpeedDial
      hidden
      open
      ariaLabel="SpeedDial basic example"
      // sx={{ position: 'absolute', top: 24, left: 24 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        tooltipPlacement="right"
        FabProps={{
          disabled: view === "front",
        }}
        icon={<CameraFrontIcon />}
        tooltipTitle={"Front"}
        onClick={onFrontClick}
        tooltipOpen={false}
      />
      <SpeedDialAction
        tooltipPlacement="right"
        FabProps={{
          disabled: view === "back",
        }}
        icon={<FlipToBackIcon />}
        tooltipTitle={"Back"}
        onClick={onBackClick}
        tooltipOpen={false}
      />
      <SpeedDialAction
        tooltipPlacement="right"
        icon={<RotateRightIcon />}
        tooltipTitle={"Rotate"}
        onClick={onRotateClick}
        tooltipOpen={false}
        FabProps={
          {
            disabled: !userCardImage
          }
        }
      />
      <SpeedDialAction
        tooltipPlacement="right"
        FabProps={
          {
            // disabled: view === 'front' && !!userCardImage && !!userCard.certNumber
          }
        }
        icon={<PhotoCameraIcon />}
        tooltipTitle={"Upload"}
        onClick={
          view === "front" && !!userCardImage && !!userCard.cardGrade
            ? undefined
            : onUploadClick
        }
        tooltipOpen={false}
      />
      <SpeedDialAction
        tooltipPlacement="right"
        icon={<SaveIcon />}
        tooltipTitle={"Save"}
        onClick={onSave}
        tooltipOpen={false}
      />
    </SpeedDial>
  </Box>
);

export default UserCardDetailsImageEditorSpeedDialView;
