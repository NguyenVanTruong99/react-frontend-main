import Modal from "@mui/material/Modal";
import { Box, Typography, Button } from "@mui/material";
import styles from "./ModalPromptStyles";

const ModalPromptView = ({
  open,
  promptMessage,
  closeMessage,
  actionMessage,
  handleClose,
  handleAction,
}) => (
  <>
    <Modal open={!!open} onClose={handleClose}>
      <Box sx={styles.Container}>
        <Box sx={styles.Top}>
          <Box sx={styles.Mid}>
            <Typography>{promptMessage}</Typography>
          </Box>
        </Box>
        <Box sx={styles.Buttons}>
          <Button onClick={handleClose} variant="outlined">
            {closeMessage}
          </Button>
          {handleAction ? (
            <Button onClick={handleAction} variant="contained">
              {actionMessage}
            </Button>
          ) : null}
        </Box>
      </Box>
    </Modal>
  </>
);

export default ModalPromptView;
