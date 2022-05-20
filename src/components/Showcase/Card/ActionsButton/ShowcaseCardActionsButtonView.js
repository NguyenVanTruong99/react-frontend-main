import { Box, IconButton, Menu, MenuItem, Modal } from "@mui/material";

import Dots from "assets/images/icons/dots.svg";
import ModalPrompt from "components/ModalPrompt";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import ShowcaseCardAddModal from "../AddModal";
import ShowcaseForm from "components/Showcase/Form";
import UserCollectionFollowerButton from "components/UserCollectionFollower/Button";

const ShowcaseCardActionsButtonView = ({
  showcase,
  isFollowing,
  onClick,
  onClose,
  isOpen,
  onShare,
  onDelete,
  anchorEl,
  onEdit,
  onCancel,
  showModal,
  onUnFollow,
  onViewProfile,
  currentUser,
  handleNullClick,
  onAddCardsClick,
  sx,
  color,
  setCardModalOpen,
  cardModalOpen,
  userCollectionId,
  deleteShowcaseOpen,
  handleDeleteShowcaseClose,
  deleteShowcaseAction,
  size,
  addClipOpen,
  handleAddClipClose,
  unfollowOpen,
  handleUnfollowOpen,
  handleUnfollowClose,
}) => (
  <>
    <IconButton
      sx={
        !!sx
          ? sx
          : {
              position: "absolute",
              right: 0,
              top: 16,
              zIndex: 41,
            }
      }
      onClick={onClick}
    >
      {size === "large" ? (
        <img src={Dots} alt="dots" color={color} fontSize="large" />
      ) : (
        <PendingOutlinedIcon color={color} />
      )}
    </IconButton>
    {!!isOpen && (
      <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
        <MenuItem onClick={onShare}>Share Showcase</MenuItem>
        {currentUser?.authenticatable?.id !== showcase?.userId
          ? [
              <MenuItem key="1" onClick={handleNullClick}>
                <UserCollectionFollowerButton
                  inList={true}
                  isFollowing={isFollowing}
                  userCollectionId={showcase.id}
                />
              </MenuItem>,
              <MenuItem key="2" onClick={onViewProfile}>
                View {showcase.user.username ?? "No Names"}'s Profile
              </MenuItem>,
            ]
          : [
              <MenuItem key="1" onClick={onEdit}>
                Edit showcase details...
              </MenuItem>,
              <MenuItem key="2" onClick={onDelete}>
                Delete Showcase...
              </MenuItem>,
              <MenuItem key="3" onClick={onAddCardsClick}>
                Add Cards
              </MenuItem>,
            ]}
      </Menu>
    )}
    <Modal
      open={showModal}
      onClick={event => event.stopPropagation()}
      // onClick={setModalOpen.bind(null, false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "100%",
            md: 600,
          },
          height: {
            xs: "100%",
            md: "auto",
          },
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "8px",
          border: "1px solid #9E9E9E",
          p: 0,
        }}
      >
        <ShowcaseForm
          showcase={showcase}
          onSuccess={onCancel}
          onCancel={onCancel}
          mode="edit"
        />
      </Box>
    </Modal>
    <ShowcaseCardAddModal
      setCardModalOpen={setCardModalOpen}
      cardModalOpen={cardModalOpen}
      userCollectionId={userCollectionId}
    />
    <ModalPrompt
      open={!!deleteShowcaseOpen}
      promptMessage="Delete this showcase? This can't be undone."
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleDeleteShowcaseClose}
      handleAction={deleteShowcaseAction}
    />
    <ModalPrompt
      open={!!addClipOpen}
      promptMessage="URL copied to your clipboard!"
      closeMessage="OK"
      actionMessage="Yes"
      handleClose={handleAddClipClose}
      handleAction={null}
    />
    <ModalPrompt
      open={!!unfollowOpen}
      promptMessage="Are you sure you want to unfollow?"
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleUnfollowClose}
      handleAction={onUnFollow}
    />
  </>
);

export default ShowcaseCardActionsButtonView;
