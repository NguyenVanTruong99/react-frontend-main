import { Box, Stack, Button } from "@mui/material";
import style from "./ProfileEditActionsStyle";

const ProfileEditActionsView = ({ isSaveEnabled, onSubmit, onClose }) =>
  <Box sx={ style.actionsBox }>
    <Stack direction="row" spacing={1} sx={ style.actionsStack }>
      <Button variant="contained" disabled={!isSaveEnabled} onClick={onSubmit} sx={ style.actionsButton }>Save</Button>
      <Button variant="text" onClick={onClose} sx={ style.actionsButton }>Cancel</Button>
    </Stack>
  </Box>

export default ProfileEditActionsView;
  