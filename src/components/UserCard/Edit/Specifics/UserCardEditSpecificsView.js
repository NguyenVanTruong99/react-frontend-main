import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import UserCardEditDetails from "../Details";

const UserCardEditSpecificsView = ({ userCardId }) => (
  <Box
    sx={{
      backgroundColor: theme => theme.palette.divider,
      p: {
        xs: 2,
        md: 8,
      },
    }}
  >
    <Typography variant="h4">Specifics</Typography>
    <Paper sx={{ p: 4, mt: 4 }}>
      <UserCardEditDetails userCardId={userCardId} />
      {/* <Divider sx={{my: 2}} />
      <UserCardEditGrade userCardId={userCardId} /> */}
    </Paper>
  </Box>
);

export default UserCardEditSpecificsView;
