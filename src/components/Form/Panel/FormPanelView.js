import { Box, Button, Paper, Typography } from "@mui/material";

import styles from "./FormPanelStyles";

const FormPanelView = ({ title, isSaveEnabled, onSubmit, children }) => (
  <>
    <Typography variant="h4" sx={styles.heading}>
      {title}
    </Typography>
    <Paper elevation={1} sx={styles.form}>
      {children}
    </Paper>
    <Box sx={styles.footer}>
      <Button
        sx={styles.button}
        onClick={onSubmit}
        variant="contained"
        disabled={!isSaveEnabled}
      >
        Save Changes
      </Button>
    </Box>
  </>
);

export default FormPanelView;
