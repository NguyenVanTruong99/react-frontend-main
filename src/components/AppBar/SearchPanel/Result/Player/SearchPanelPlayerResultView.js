import { Box, ListItem, ListItemButton, Typography } from "@mui/material";
import SportIcon from "components/Sport/Icon";
import PlayerAvatar from "components/Player/Avatar";
import styles from "./SearchPanelPlayerResultStyles";

const SearchPanelPlayerResultView = ({
  playerId,
  playerFullName,
  playerHeadshotUrl,
  playerStatus,
  teamNickname,
  teamLocation,
  sportName,
  handleClick,
}) => (
  <ListItem sx={{ p: 0 }}>
    <ListItemButton
      sx={styles.container}
      component="a"
      onClick={e => handleClick(e, `/players/${playerId}`)}
    >
      <PlayerAvatar
        playerHeadshotUrl={playerHeadshotUrl}
        playerFullName={playerFullName}
      />
      <Box sx={styles.right}>
        {playerStatus === "ACT" ? (
          <Typography variant="small" sx={styles.team}>
            {teamLocation} {teamNickname}
          </Typography>
        ) : (
          <Typography variant="small" sx={styles.team}>
            Retired
          </Typography>
        )}
        {sportName && <SportIcon sportName={sportName || ""} />}
      </Box>
    </ListItemButton>
  </ListItem>
);

export default SearchPanelPlayerResultView;
