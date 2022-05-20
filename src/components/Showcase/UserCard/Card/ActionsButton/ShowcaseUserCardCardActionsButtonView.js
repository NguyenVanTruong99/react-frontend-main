import { Box, IconButton, Menu, MenuItem, Modal } from "@mui/material";

import { Link } from "react-router-dom";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import ShowcaseForm from "components/Showcase/Form";
import ModalPrompt from "components/ModalPrompt";

const ShowcaseUserCardCardActionsButtonView = ({
  showcase,
  onClick,
  onClose,
  isOpen,
  onShare,
  anchorEl,
  onCancel,
  showModal,
  userCollectionCard,
  onRemove,
  deleteShowcaseOpen,
  handleDeleteShowcaseOpen,
  handleDeleteShowcaseClose,
  onDelete,
  removeCardOpen,
  handleRemoveCardOpen,
  handleRemoveCardClose,
}) => (
  <>
    <IconButton onClick={onClick}>
      <PendingOutlinedIcon />
    </IconButton>
    {!!isOpen && (
      <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
        <MenuItem onClick={handleRemoveCardOpen}>
          Remove Card from Showcase
        </MenuItem>
        <MenuItem
          component={Link}
          to={`/collectors-cards/${userCollectionCard?.userCardId}/edit`}
          onClick={onShare}
        >
          Edit Card Details
        </MenuItem>
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
    <ModalPrompt
      open={!!removeCardOpen}
      promptMessage="Remove this card from your showcase?"
      closeMessage="Cancel"
      handleClose={handleRemoveCardClose}
      actionMessage="Continue"
      handleAction={onRemove}
    />
  </>
);

export default ShowcaseUserCardCardActionsButtonView;
