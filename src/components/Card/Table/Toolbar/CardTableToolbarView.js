import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

import AddCardIcon from "assets/images/add_card.svg";
import BgPattern from "assets/images/Bg-med-pattern.png";
import CardTableFilter from "components/Card/Table/Filter";
import Filter from "assets/svg/icons/Filter.svg";
import LoginModal from "components/LoginModal";
import Modal from "components/Modal";
import ModalPrompt from "components/ModalPrompt";
import More from "assets/svg/icons/More.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from "@mui/icons-material/Tune";
import styles from "./CardTableToolbarStyles";

const CardTableToolbarView = ({
  anchorEl,
  FilterModalProps,
  handleAddToCollection,
  handleCloseFilterModal,
  handleCloseVisibleColumnModal,
  handleFilterChanged,
  handleMenuClose,
  handleMenuOpen,
  handleOpenFilterModal,
  handleOpenVisibleColumnModal,
  handleResetFilterModal,
  handleShowFilterResults,
  isFilterModalOpen,
  isMenuOpen,
  isRowsSelected,
  isVisibleColumnModalOpen,
  selectedFilters,
  isMobile,
  addCardOpen,
  handleAddCardOpen,
  handleAddCardClose,
  handleAddCardAction,
  addCardConfirmOpen,
  handleAddCardConfirmOpen,
  handleAddCardConfirmClose,
  loginOpen,
  handleLoginClose,
  redirectTo
}) => (
  <Box sx={styles.container}>
    {/* <Tooltip title="Search">
      <IconButton sx={styles.iconButton}>
        <Avatar sx={styles.avatar}>
          <SearchIcon color="blue" />
        </Avatar>
      </IconButton>
    </Tooltip> */}
    <Tooltip title="Filter">
      <IconButton sx={styles.iconButton} onClick={handleOpenFilterModal}>
        <Avatar sx={styles.avatar}>
          {/* <TuneIcon color="blue"  /> */}
          <img src={Filter} alt="Filter" />
        </Avatar>
      </IconButton>
    </Tooltip>
    <Tooltip title="Actions">
      <IconButton
        sx={styles.iconButton}
        onClick={handleMenuOpen}
        disabled={!isRowsSelected}
      >
        <Avatar sx={styles.avatar}>
          {/* <MoreHorizIcon color="blue"  /> */}
          <img
            src={More}
            alt="more"
            style={!isRowsSelected ? { opacity: 0.5 } : { opacity: 1 }}
          />
        </Avatar>
      </IconButton>
    </Tooltip>
    {isRowsSelected ? (
      <Button sx={styles.button} variant="outlined" onClick={handleAddCardOpen}>
        {isMobile ? (
          <img src={AddCardIcon} style={styles.addCardIcon} alt="" />
        ) : (
          <>
            <img src={AddCardIcon} style={styles.addCardIcon} alt="" />
            <p style={{ paddingLeft: "8px" }}>Add to My Collection</p>
          </>
        )}
      </Button>
    ) : (
      <Button sx={styles.button.disabled} variant="outlined">
        {isMobile ? (
          <img src={AddCardIcon} style={styles.addCardIcon} alt="" />
        ) : (
          <>
            <img src={AddCardIcon} style={styles.addCardIcon} alt="" />
            <p style={{ paddingLeft: "8px" }}>Add to My Collection</p>
          </>
        )}
      </Button>
    )}
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      MenuListProps={{ "aria-labelledby": "basic-button" }}
    >
      {/* <MenuItem onClick={() => {}}>Define visible table columns</MenuItem> */}
      <MenuItem onClick={handleAddCardOpen}>
        Add cards to my collection
      </MenuItem>
      {/* <MenuItem
        onClick={() => {
          alert("coming soon");
        }}
      >
        Add to my watchlist
      </MenuItem> */}
      {/* <MenuItem onClick={handleOpenVisibleColumnModal}>Define visible table columns</MenuItem> */}
    </Menu>

    <Modal
      actionLabel={"Save"}
      handleAction={() => { }}
      handleClose={handleCloseVisibleColumnModal}
      isOpen={isVisibleColumnModalOpen}
      title={"Select table columns"}
    >
      <Typography>coming soon</Typography>
    </Modal>
    <Modal
      actionLabel="Show Results"
      cancelLabel="Clear Filters"
      handleAction={handleShowFilterResults}
      handleClose={handleCloseFilterModal}
      handleCancel={handleResetFilterModal}
      isOpen={isFilterModalOpen}
      title={"Filter cards"}
      headerImage={BgPattern}
    >
      <CardTableFilter
        {...FilterModalProps}
        handleFilterChanged={handleFilterChanged}
        selectedFilters={selectedFilters}
      />
    </Modal>
    <ModalPrompt
      open={!!addCardOpen}
      promptMessage="Add these cards to your collection?"
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleAddCardClose}
      handleAction={handleAddCardAction}
    />
    <ModalPrompt
      open={!!addCardConfirmOpen}
      promptMessage="The cards were added to your collection!"
      closeMessage="Close"
      handleClose={handleAddCardConfirmClose}
    />
    <LoginModal open={loginOpen} handleClose={handleLoginClose} redirectTo={redirectTo} />

  </Box>
);

export default CardTableToolbarView;
