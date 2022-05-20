import { Divider, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShowcaseModal from "components/Showcase/Modal";
import ModalPrompt from "components/ModalPrompt";
import styles from "./UserSearchTableRowActionsStyles";

const UserSearchTableRowActionsView = ({
  handleMenuClick,
  handleMenuClose,
  handleMenuOpen,
  menuAnchorEl,
  user,
  isMenuOpen,
}) => (
  <>
    <Tooltip title="actions">
      <IconButton onClick={handleMenuOpen}>
        <MoreHorizIcon />
      </IconButton>
    </Tooltip>
    <Menu
      anchorEl={menuAnchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      MenuListProps={{ "aria-labelledby": "basic-button" }}
    >
      <MenuItem onClick={e => handleMenuClick(e, "share-user")}>
        Share User Profile link
      </MenuItem>
    </Menu>
  </>
);

export default UserSearchTableRowActionsView;
