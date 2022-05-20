import { Box, Grid, Link, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "components/Logo";
import NoxxPattern from "assets/images/backgrounds/noxx-bg-md.png";
import styles from "./FooterStyles";

const FooterView = ({ backendVersion, frontendVersion }) => (
  <Grid container spacing={2} sx={styles.container}>
    <Box
      sx={{
        width: "100%",
        pt: 4,
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        m={0}
        sx={{
          height: "150px",
          width: "100vw",
          position: "absolute",
          right: 0,
          top: { md: 2, xs: 60 },
          overflow: "hidden",
        }}
      >
        <img
          src={NoxxPattern}
          alt="Noxx"
          style={{
            width: "80%",
            position: "absolute",
            overflow: "hidden",
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
    <Grid item xs={12} sx={styles.gridIconRow}>
      <Box sx={styles.logo}>
        <Logo color="white" />
      </Box>
      <Box sx={styles.links}>
        <Link sx={styles.link} href="https://www.facebook.com/beckettcollect">
          <FacebookIcon />
        </Link>
        <Link sx={styles.link} href="https://www.instagram.com/beckettcollect/">
          <InstagramIcon />
        </Link>
        <Link sx={styles.link} href="https://twitter.com/beckettcollect">
          <TwitterIcon />
        </Link>
        <Link
          sx={styles.link}
          href="https://www.youtube.com/c/BeckettCollectibles"
        >
          <YouTubeIcon />
        </Link>
        <Link
          sx={styles.link}
          href="https://www.linkedin.com/company/beckett-collectibles/"
        >
          <LinkedInIcon />
        </Link>
      </Box>
    </Grid>
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      sx={{
        zIndex: 3,
        padding: 0,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={styles.footerTextBox}>
        <Typography sx={styles.copyrightText}>
          Copyright &copy; 2002, Beckett Collectibles, LLC. All rights reserved.
        </Typography>
        <Typography sx={styles.copyrightText}>
          version {backendVersion} / {frontendVersion}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            zIndex: 2,
          }}
        >
          <Link
            sx={{ textDecoration: "none" }}
            href="https://www.beckett.com/tos"
          >
            <Typography variant="body2" sx={styles.middleLinks}>
              Terms of Service
            </Typography>
          </Link>
          <Link
            sx={{ textDecoration: "none" }}
            href="https://www.beckett.com/privacy"
          >
            <Typography variant="body2" sx={styles.middleLinks}>
              Privacy Policy
            </Typography>
          </Link>
        </Box>
      </Box>
    </Grid>
  </Grid>
);

export default FooterView;
