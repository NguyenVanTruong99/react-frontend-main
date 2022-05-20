import { TableCell, TableRow } from "@mui/material";

import { PLAYER_TABLE_COLS } from "constants/players";
import PlayerAvatar from "components/Player/Avatar";
import formatPlayerStatus from "utils/formatPlayerStatus";

const PlayerTableRowView = ({ handlePlayerClicked, item, visibleColumns }) => (
  <TableRow>
    {visibleColumns.includes(PLAYER_TABLE_COLS.PLAYER) && (
      <TableCell
        align="left"
        onClick={handlePlayerClicked}
        sx={{ cursor: "pointer" }}
      >
        <PlayerAvatar
          playerFullName={item?.player?.fullName}
          playerHeadshotUrl={item?.player?.headshotUrl}
          avatarSx={{ marginRight: theme => theme.spacing(3) }}
        />
      </TableCell>
    )}
    {visibleColumns.includes(PLAYER_TABLE_COLS.POSITION) && (
      <TableCell>{item?.player?.position?.name}</TableCell>
    )}
    {visibleColumns.includes(PLAYER_TABLE_COLS.NUMBER) && (
      <TableCell>{item?.player?.jerseyNumber || "-"}</TableCell>
    )}
    {visibleColumns.includes(PLAYER_TABLE_COLS.SPORT) && (
      <TableCell>{item?.player?.sport?.name || "-"}</TableCell>
    )}
    {visibleColumns.includes(PLAYER_TABLE_COLS.TEAM) && (
      <TableCell>
        {item?.player?.team
          ? `${item?.player?.team.location} ${item?.player?.team.nickname}`
          : "-"}
      </TableCell>
    )}
    {visibleColumns.includes(PLAYER_TABLE_COLS.STATUS) && (
      <TableCell>{formatPlayerStatus(item?.player?.status)}</TableCell>
    )}
  </TableRow>
);

export default PlayerTableRowView;
