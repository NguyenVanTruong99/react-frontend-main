import { Box } from "@mui/system";

import styles from "./RouteModalStyles";

const RouteModalView = ({ children }) => (
  <Box sx={styles.wrapper}>
    <Box sx={styles.content}>{children}</Box>
  </Box>
);

export default RouteModalView;
