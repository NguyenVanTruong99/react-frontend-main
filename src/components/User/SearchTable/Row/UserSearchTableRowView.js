import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";

import { DateTime } from "luxon";
import { USER_TABLE_COLS } from "constants/users";
import UserAvatar from "components/UserAvatar";
import styles from "./UserSearchTableRowStyles";

const UserSearchTableRowView = ({
  handleUserClick,
  handleRowClicked,
  handleRowToggled,
  isSelected,
  item,
  RowActionComponent,
  selectable,
  theme,
  visibleColumns,
}) => {
  const formatDate = date => DateTime.fromISO(date).toFormat("MMM yyyy");

  return (
    <TableRow
      onClick={e => (!!handleRowClicked ? handleRowClicked(item) : null)}
      hover={!!handleRowClicked}
      sx={!!handleRowClicked ? { ...styles.clickable } : {}}
    >
      {selectable && (
        <TableCell sx={styles.checkboxCell}>
          <Checkbox
            color="primary"
            checked={isSelected}
            onChange={() => handleRowToggled(item)}
            inputProps={{}}
          />
        </TableCell>
      )}
      {visibleColumns.map((visibleColumn, idx) => {
        switch (visibleColumn) {
          case USER_TABLE_COLS.MEMBER:
            return (
              <TableCell
                key={idx}
                align="left"
                sx={styles.cardDetail}
                onClick={e => handleUserClick(e, `/users/${item.id}`)}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
                    <UserAvatar
                      length="45px"
                      user={item.user}
                      sx={{
                        profileImg: {
                          width: "73%",
                          height: "73%",
                          left: "13%",
                          top: "-100.5%",
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ minWidth: "200px" }}>
                    <Typography sx={{ color: theme.palette.grey.B200 }}>
                      Member since {formatDate(item.user.createdAt)}
                    </Typography>
                    <Typography sx={{ fontSize: "15px", fontWeight: 700 }}>
                      {item.user.username}
                    </Typography>
                    <Typography>{item.user.cardCount} Cards</Typography>
                    <Typography sx={{ color: theme.palette.grey.B200 }}>
                      {item.user.followerCount} Followers
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
            );
          case USER_TABLE_COLS.INTEREST:
            return (
              <TableCell key={idx}>
                <Typography>{item.interest}</Typography>
              </TableCell>
            );
          case USER_TABLE_COLS.MUTUAL_FRIENDS:
            return (
              <TableCell key={idx}>
                <Typography>3</Typography>
              </TableCell>
            );
          default:
            return <TableCell key={idx} />;
        }
      })}
      {RowActionComponent && (
        <TableCell>
          <RowActionComponent item={item} />
        </TableCell>
      )}
    </TableRow>
  );
};

export default UserSearchTableRowView;
