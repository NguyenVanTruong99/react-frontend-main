import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import globalStyles from "components/Styles";
import styles from "./ImageViewerStyles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ImageViewerView = ({
  currentImageSrc,
  firstImageSrc,
  lastImageSrc,
  onPrevious,
  onNext,
  onOpen,
}) => (
  <Box
    sx={{
      ...globalStyles.row,
      ...styles.wrapper,
      ...{ justifyContent: "space-between", alignItems: "center" },
    }}
  >
    <Box sx={styles.openIconWrapper}>
      <IconButton onClick={onOpen} sx={styles.iconButton}>
        <OpenInNewIcon />
      </IconButton>
    </Box>
    <Box sx={{ p: { xs: 0, md: 4 } }}>
      <IconButton
        onClick={onPrevious}
        sx={{
          ...styles.iconButton,
          ...{
            visibility:
              currentImageSrc === firstImageSrc ? "hidden" : "visible",
          },
        }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
    </Box>
    <Box sx={{ py: 2, width: "100%" }}>
      <img
        alt="Gallery"
        src={currentImageSrc}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
    <Box sx={{ p: { xs: 0, md: 4 } }}>
      <IconButton
        onClick={onNext}
        sx={{
          ...styles.iconButton,
          ...{
            visibility: currentImageSrc === lastImageSrc ? "hidden" : "visible",
          },
        }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  </Box>
);

export default ImageViewerView;
