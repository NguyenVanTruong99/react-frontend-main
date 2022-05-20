import AddCardIcon from "assets/images/add_card.svg";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LoginModal from "components/LoginModal";
import ModalPrompt from "components/ModalPrompt";
import ShareIcon from "assets/images/icons/share_link.svg";
import Stack from "@mui/material/Stack";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WantlistAddRemoveIconButton from "components/WantList/AddRemoveIconButton";
import style from "./CardTableRowActionsStyles";

const CardTableRowActionsView = ({
  cardId,
  addCardsOpen,
  currentUser,
  handleAddCardsOpen,
  handleAddCardsClose,
  handleAddCardsAction,
  addCardsConfirmOpen,
  handleAddCardsConfirmClose,
  handleOpenLogin,
  handleShare,
  addClipOpen,
  handleAddClipClose,
  loginOpen,
  handleLoginClose,
  redirectTo,
}) => (
  <>
    <Box>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={handleAddCardsOpen} sx={style.iconButton}>
          <img src={AddCardIcon} style={style.addCardIcon} alt="" />
        </IconButton>
        <IconButton variant="outlined" sx={style.iconButton} onClick={currentUser ? null : handleOpenLogin}>
          {currentUser ? <WantlistAddRemoveIconButton cardId={cardId} size="small" />
            : <StarOutlineIcon sx={{
              cursor: "pointer",
            }}
              fontSize={"small"}
              color="primary" />
          }
        </IconButton>
        <IconButton onClick={handleShare} sx={style.iconButton}>
          <img src={ShareIcon} alt="" />
        </IconButton>
      </Stack>
    </Box>

    <ModalPrompt
      open={!!addCardsOpen}
      promptMessage="Add this to your collection?"
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleAddCardsClose}
      handleAction={handleAddCardsAction}
    />
    <ModalPrompt
      open={!!addCardsConfirmOpen}
      promptMessage="The card(s) were added to your collection!"
      closeMessage="Close"
      actionMessage="Yes"
      handleClose={handleAddCardsConfirmClose}
      handleAction={null}
    />
    <ModalPrompt
      open={!!addClipOpen}
      promptMessage="URL copied to your clipboard!"
      closeMessage="OK"
      actionMessage="Yes"
      handleClose={handleAddClipClose}
      handleAction={null}
    />
    <LoginModal
      open={loginOpen}
      handleClose={handleLoginClose}
      redirectTo={redirectTo}
    />
  </>
);

export default CardTableRowActionsView;
