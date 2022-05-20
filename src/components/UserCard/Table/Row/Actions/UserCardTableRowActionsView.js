import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";

import ModalPrompt from "components/ModalPrompt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShowcaseModal from "components/Showcase/Modal";

const UserCardTableRowActionsView = ({
  handleMenuClick,
  handleMenuClose,
  handleMenuOpen,
  handleSaveShowcases,
  isMenuOpen,
  isShowcaseModalOpen,
  menuAnchorEl,
  handleToggleShowcaseModal,
  userCard,
  deleteCardOpen,
  handleDeleteCardOpen,
  handleDeleteCardClose,
  handleDeleteCardAction,
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
      <MenuItem onClick={e => handleDeleteCardOpen()}>
        Remove from my collection
      </MenuItem>
      <MenuItem onClick={e => handleMenuClick(e, "edit-details")}>
        Edit card details
      </MenuItem>
      <MenuItem onClick={e => handleMenuClick(e, "add-showcase")}>
        Add to a showcase
      </MenuItem>
      <MenuItem onClick={e => handleMenuClick(e, "share-card")}>
        Share card
      </MenuItem>
    </Menu>
    <ShowcaseModal
      isOpen={isShowcaseModalOpen}
      onClose={handleToggleShowcaseModal}
      onSave={handleSaveShowcases}
      userCardId={userCard.id}
    />
    <ModalPrompt
      open={!!deleteCardOpen}
      promptMessage="Are you sure you want to remove this card?"
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleDeleteCardClose}
      handleAction={handleDeleteCardAction}
    />
  </>
);

export default UserCardTableRowActionsView;
