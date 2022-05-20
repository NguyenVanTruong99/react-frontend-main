/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";

import AddCardsSplash from "assets/images/add-cards-splash.png";
import AddCertIcon from "assets/images/add-card-cert.svg";
import AddGcrIcon from "assets/images/add-card-gcr.svg";
import InstagramIcon from '@mui/icons-material/Instagram';
import AddSearchIcon from "assets/images/add-card-search.svg";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/system";
import LoadingButton from "@mui/lab/LoadingButton";
import LoadingGif from "assets/images/loading3.gif";
import addCardHeader from "assets/images/card-add-header-icon.png";
import styles from "./CardAddSplashStyles";
import theme from "theme.js";
import InstagramPhotoPicker from 'components/InstagramPhotoPicker';

const CardAddSplashView = ({
  onCerticationButtonClick,
  onFileClick,
  onSearchButtonClick,
  onFinishButtonClick,
  loading,
  stagedCardCount,
  onInstagramClick,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          background: "rgba(0,0,0,0.2)",
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={loading}
      >
        <img src={LoadingGif} style={{ height: 100 }} alt="loading" />
      </Backdrop>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ height: { md: "360px", xs: "268px" }, position: "absolute" }}
        >
          <img src={AddCardsSplash} style={{ height: "100%" }} alt="" />
        </Box>
        <Box
          sx={{
            mt: { md: "257px", xs: "242px" },
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 600,
              letterSpacing: "-1.5px",
              textAlign: "center",
              fontSize: { md: "70px", xs: "36px" },
            }}
          >
            Add Your Cards
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#757575",
              letterSpacing: "0.15px",
              textAlign: "center",
              mt: "24px",
            }}
          >
            Select an option below to get started.
          </Typography>
        </Box>
        <Box sx={{ mt: "43px", mb: "218px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
              width: "800px",
              height: { md: "130px", xs: "450px" },
              padding: 0,
            }}
          >

            <Button
              sx={styles.button.large}
              variant={isMobile ? "outlined" : "text"}
              onClick={onFileClick}
            >
              <Box sx={styles.iconBox}>
                <img src={AddGcrIcon} style={styles.icons} alt="gcr"></img>
              </Box>
              Graded Card Recognition
            </Button>

            <Button
              sx={styles.button.large}
              variant={isMobile ? "outlined" : "text"}
              onClick={onCerticationButtonClick}
            >
              <Box sx={styles.iconBox}>
                <img src={AddCertIcon} style={styles.icons} alt="create" />
              </Box>
              Add By Cert #'s
            </Button>

            <Button
              sx={styles.button.large}
              variant={isMobile ? "outlined" : "text"}
              onClick={onInstagramClick}
            >
              <Box sx={styles.iconBox}>
                <InstagramIcon />
              </Box>
              Import
            </Button>

            <Button
              sx={styles.button.large}
              variant={isMobile ? "outlined" : "text"}
              onClick={onSearchButtonClick}
            >
              <Box sx={styles.iconBox}>
                <img src={AddSearchIcon} style={styles.icons} alt="search" />
              </Box>
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardAddSplashView;
