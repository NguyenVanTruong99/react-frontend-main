import {
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
  styled,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./ModalStyles";

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  -webkit-tap-highlight-color: transparent;
`;

const ModalView = ({
  actionLabel,
  cancelLabel,
  hideCloseButton,
  children,
  handleAction,
  handleClose,
  handleCancel,
  isOpen,
  showFooter = true,
  title,
  headerImage,
  headerImageHeight,
  sx = {},
}) => (
  <Modal BackdropComponent={Backdrop} open={isOpen} onClose={handleClose}>
    <Box sx={{ ...styles.container, ...sx }}>
      {headerImage && (
        <Box sx={{ width: "100%" }}>
          <img
            src={headerImage}
            style={{ width: "100%", height: headerImageHeight ?? "64px" }}
            alt=""
          />
        </Box>
      )}
      <Box
        sx={
          hideCloseButton
            ? { ...styles.header, ...{ justifyContent: "center" } }
            : styles.header
        }
      >
        <Typography variant="h4">{title}</Typography>
        {!hideCloseButton && (
          <IconButton onClick={handleClose} sx={styles.closeIcon}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={styles.body}>{children}</Box>
      {showFooter && (
        <Box sx={styles.footer}>
          {!!handleCancel && (
            <Button
              variant="outlined"
              onClick={() => {
                if (handleCancel) handleCancel();
                else handleClose();
              }}
            >
              {cancelLabel || "Cancel"}
            </Button>
          )}
          {!!handleAction && (
            <Button variant="contained" onClick={handleAction}>
              {actionLabel}
            </Button>
          )}
        </Box>
      )}
    </Box>
  </Modal>
);

export default ModalView;
