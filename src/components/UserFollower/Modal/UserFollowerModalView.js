import styles from "./UserFollowerModalStyles";
import Modal from "components/Modal";
import {
  Button,
  Box,
  List,
  ListItemButton,
  Typography,
  InputAdornment,
} from "@mui/material";
import Table from "components/Table";
import UserTableRow from "components/User/Table/Row";
import UserFollowerButton from "components/UserFollower/Button";
import { Link } from "react-router-dom";
import TextField from "components/Form/TextField";
import SearchIcon from "@mui/icons-material/Search";

const UserTable = (title, users, onRowClicked, theme) => (
  <>
    <Table
      title={title}
      rows={users}
      columns={[
        { label: "", sortable: false },
        { label: "", sortable: false },
      ]}
      RowComponent={UserTableRow}
      RowActionComponent={({ item }) => (
        <UserFollowerButton
          userId={item.id}
          sx={{ maxWidth: { md: "160px", xs: "120px" } }}
        />
      )}
      handleRowClicked={onRowClicked}
      showCount={false}
      showPagination={false}
      sx={{
        border: 0,
        toolbarText: {
          p: 0,
        },
        th: {
          p: 0,
        },
        ".MuiTypography-h6": {
          fontWeight: 700,
          fontSize: theme.typography.small,
          color: theme.palette.grey.B200,
          mb: 1,
        },
      }}
      TableProps={{ size: "small" }}
    />
  </>
);

const UserFollowerModalView = ({
  currentTab,
  followers,
  following,
  isOpen,
  isSelf,
  mutual,
  onClose,
  onRowClicked,
  onTabChange,
  title,
  theme,
}) => (
  <Modal handleClose={onClose} isOpen={isOpen} title={title} showFooter={false}>
    <Box sx={styles.nav}>
      <List sx={styles.navList}>
        <ListItemButton
          onClick={e => onTabChange(e, "followers")}
          sx={styles.navListItem}
          selected={currentTab === "followers"}
        >
          All Followers
        </ListItemButton>
        <ListItemButton
          onClick={e => onTabChange(e, "following")}
          sx={styles.navListItem}
          selected={currentTab === "following"}
        >
          All Following
        </ListItemButton>
        {!isSelf && (
          <ListItemButton
            onClick={e => onTabChange(e, "mutual")}
            sx={styles.navListItem}
            selected={currentTab === "mutual"}
          >
            Mutual Friends
          </ListItemButton>
        )}
      </List>
    </Box>
    <Box>
      {currentTab === "followers" &&
        (followers?.length > 0 ? (
          UserTable("Followers", followers, onRowClicked, theme)
        ) : (
          <Box p={2} sx={{ display: "flex", flexDirection: "column" }}>
            {isSelf ? (
              <>
                <Typography variant="p">
                  Add Cards or Create a Showcase to showoff your collection to
                  other collectors.
                </Typography>
                <Link to="/add-cards" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{ ...theme.NoxxButton, mt: 2 }}
                  >
                    Add Cards
                  </Button>
                </Link>
              </>
            ) : (
              <Typography variant="p">Nothing to see here yet.</Typography>
            )}
          </Box>
        ))}
      {currentTab === "following" &&
        (following?.length > 0 ? (
          UserTable("Following", following, onRowClicked, theme)
        ) : (
          <Box p={2} sx={{ display: "flex", flexDirection: "column" }}>
            {isSelf ? (
              <>
                <Typography variant="p">
                  Discover cool collections and follow other collectors!
                </Typography>
                <Link
                  to="/#collectors-to-connect-with"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    sx={{ ...theme.NoxxButton, mt: 2 }}
                  >
                    Connect
                  </Button>
                </Link>
              </>
            ) : (
              <Typography variant="p">Nothing to see here yet.</Typography>
            )}
          </Box>
        ))}
      {currentTab === "mutual" &&
        (mutual?.length > 0 ? (
          UserTable("Friends", mutual, onRowClicked, theme)
        ) : (
          <Box p={2} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="p">Nothing to see here yet.</Typography>
          </Box>
        ))}
    </Box>
  </Modal>
);

export default UserFollowerModalView;
