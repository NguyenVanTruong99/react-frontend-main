import { Typography, Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import styles from "./CardAddNavStepStyles";

const CardAddNavStepView = ({ text, stage }) => (
  <Box component="nav" sx={styles.nav}>
    {stage === "completed" ? (
      <CheckCircleIcon
        sx={{
          color: theme =>
            ["active", "completed"].includes(stage)
              ? theme.palette.text.primary
              : theme.palette.text.disabled,
        }}
      />
    ) : (
      <CircleOutlinedIcon
        sx={{
          color: theme =>
            ["active", "completed"].includes(stage)
              ? theme.palette.text.primary
              : theme.palette.text.disabled,
        }}
      />
    )}
    <Box
      sx={{
        ml: 1,
      }}
    >
      <Typography
        color={
          ["active", "completed"].includes(stage)
            ? "text.primary"
            : "text.disabled"
        }
      >
        {text}
      </Typography>
    </Box>
  </Box>
);

export default CardAddNavStepView;
