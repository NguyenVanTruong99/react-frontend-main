import { Box, Typography } from "@mui/material";
import { ReactComponent as BlueBadge } from "assets/svg/bgs-badge-blue.svg";
import styles from "./GradingBadgeStyles";

const GradingBadgeView = ({ gradeVendor, grade, width = 70 }) => (
  <Box sx={{ ...styles.container, width }}>
    <Box sx={styles.textContainer}>
      <Typography variant="body2" sx={styles.gradeVendor}>
        {gradeVendor}
      </Typography>
      {!!grade && (
        <Typography variant="body2" sx={styles.grade}>
          {grade}
        </Typography>
      )}
    </Box>
    <Box sx={styles.badgeWrapper}>
      <BlueBadge />
    </Box>
  </Box>
);

export default GradingBadgeView;
