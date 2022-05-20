import { Box, Grid } from "@mui/material";

import Links from "./_links";
import styles from "./TopBarStyles";

const TopBarView = () => (
  <div style={{ background: "#F0EEF4" }}>
    <Grid container sx={styles.container}>
      <Grid item xs={12} sm={12}>
        <Box sx={styles.textLarge}>Welcome to NoXX</Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Links />
      </Grid>
    </Grid>
  </div>
);

export default TopBarView;
