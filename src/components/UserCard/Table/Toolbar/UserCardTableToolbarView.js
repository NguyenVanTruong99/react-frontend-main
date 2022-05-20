import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

import BgPattern from "assets/images/Bg-med-pattern.png";
import CardTableFilter from "components/Card/Table/Filter";
// import SearchIcon from '@mui/icons-material/Search'
import Filter from "assets/svg/icons/Filter.svg";
import Modal from "components/Modal";
import ModalPrompt from "components/ModalPrompt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShowcaseIcon from "assets/images/icons/showcase.png";
import ShowcaseTable from "components/Showcase/Table";
import styles from "./UserCardTableToolbarStyles";

const UserCardTableToolbarView = ({
  // handleCloseVisibleColumnModal,
  // handleOpenVisibleColumnModal,
  // isVisibleColumnModalOpen,
  anchorEl,
  FilterModalProps,
  handleCloseFilterModal,
  handleFilterChanged,
  handleMenuClose,
  handleMenuOpen,
  handleOpenFilterModal,
  handleCloseShowcaseModal,
  handleOpenShowcaseModal,
  handleRemoveFromCollection,
  handleResetFilterModal,
  handleSaveShowcases,
  handleSelectedShowcasesChanged,
  handleShowFilterResults,
  initialSelectedShowcases,
  isFilterModalOpen,
  isMenuOpen,
  isRowsSelected,
  isShowcaseModalOpen,
  isShowcasesLoading,
  selectedFilters,
  showcases,
  deleteCardOpen,
  handleDeleteCardOpen,
  handleDeleteCardClose,
  handleDeleteCardAction,
  addConfirmOpen,
  handleAddConfirmClose,
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
          <MoreHorizIcon color={isRowsSelected ? "blue" : "grey"} />
        </Avatar>
      </IconButton>
    </Tooltip>
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      MenuListProps={{ "aria-labelledby": "basic-button" }}
    >
      {isRowsSelected && (
        <MenuItem onClick={handleDeleteCardOpen}>
          Remove cards from my collection
        </MenuItem>
      )}
      {isRowsSelected && (
        <MenuItem onClick={handleOpenShowcaseModal}>Add to showcase</MenuItem>
      )}
      {/* <MenuItem onClick={() => {}}>Define visible table columns</MenuItem> */}
      {/* <MenuItem onClick={handleOpenVisibleColumnModal}>Define visible table columns</MenuItem> */}
    </Menu>

    {/* <Modal
      actionLabel={'Save'}
      handleAction={() => {}}
      handleClose={handleCloseVisibleColumnModal}
      isOpen={isVisibleColumnModalOpen}
      title={'Select table columns'}
    >
      <Typography>coming soon</Typography>
    </Modal> */}

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

    <Modal
      actionLabel="Save"
      cancelLabel="Cancel"
      hideCloseButton={true}
      handleAction={handleSaveShowcases}
      handleClose={handleCloseShowcaseModal}
      handleCancel={handleCloseShowcaseModal}
      isOpen={isShowcaseModalOpen}
      title="Add Cards to Showcase"
      headerImage={BgPattern}
      headerImageHeight="134px"
    >
      <Box sx={{ width: "100%", position: "relative", top: "-158px" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={ShowcaseIcon} style={{ height: "40px" }} alt="" />
        </Box>
      </Box>
      <ShowcaseTable
        handleSelectedShowcasesChanged={handleSelectedShowcasesChanged}
        initialSelectedShowcases={initialSelectedShowcases}
        isLoading={isShowcasesLoading}
        selectable={true}
        showcases={showcases}
      />
    </Modal>
    <ModalPrompt
      open={!!deleteCardOpen}
      promptMessage="Are you sure you want to remove these cards?"
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleDeleteCardClose}
      handleAction={handleDeleteCardAction}
    />
    <ModalPrompt
      open={!!addConfirmOpen}
      promptMessage="Cards were added to your showcase."
      closeMessage="OK"
      actionMessage="Yes"
      handleClose={handleAddConfirmClose}
      handleAction={null}
    />
  </Box>
);

export default UserCardTableToolbarView;
