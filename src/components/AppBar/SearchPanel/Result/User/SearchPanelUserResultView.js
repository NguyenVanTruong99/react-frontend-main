import {
  Box,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import UserAvatar from "components/UserAvatar";
import styles from "./SearchPanelUserResultStyles";

const SearchPanelUserResultView = ({
  user,
  userId,
  userName,
  userLocation,
  handleClick,
}) => (
  <ListItem sx={{ px: 0 }}>
    <ListItemButton
      component="a"
      onClick={e => handleClick(e, `/users/${userId}`)}
      sx={{ p: 0 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={styles.left}>
          <Box sx={{ mr: 0.5 }}>
            <UserAvatar length="45px" user={user} sx={{ profileImg: { left: "14%", top: "-106%" } }}/>
          </Box>
          <Typography>{userName}</Typography>
        </Box>
        <Box>
          {userLocation && (
            <Typography variant="small" sx={styles.muted}>
              {userLocation}
            </Typography>
          )}
        </Box>
      </Box>
    </ListItemButton>
  </ListItem>
);

export default SearchPanelUserResultView;
