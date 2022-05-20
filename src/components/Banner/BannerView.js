import { Box } from "@mui/material";
import styles from "./BannerStyles";

const BannerView = ({ sx = {}, children }) => (
  <Box m={0} sx={{ ...styles, ...sx }}>
    {children}
  </Box>
);

export default BannerView;
