import { Box, styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";

import Switch from "components/Switch";
import { Typography } from "@mui/material";
import globalStyles from "components/Styles";

const UserCardEditVisibilitySwitchView = ({ userCard, onChange }) => (
  <Box
    sx={{ ...globalStyles.row, ...{ display: "flex", alignItems: "center" } }}
  >
    <Box sx={{ mr: 2 }}>
      <Typography variant="subtitle1">
        Make visible to the community?
      </Typography>
    </Box>
    <Switch onChange={onChange} checked={userCard?.isPublic} />
  </Box>
);

export default UserCardEditVisibilitySwitchView;
