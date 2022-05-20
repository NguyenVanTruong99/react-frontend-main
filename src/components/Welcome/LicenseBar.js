import "./slick.css";

import { Box, Button, Grid, Typography } from "@mui/material";

import AddCardsBlue from "assets/svg/icons/add_card_circle.svg";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import OutlineNotch from "assets/images/notches/medium-transparent.png";
import styles from "./WelcomeStyles";
import theme from "theme.js";

const LicenseBar = ({
  isMobile,
  user,
  profileImg,
  formatDate,
  abbreviateNumber,
  handleProfileClick
}) =>
(!isMobile ?
  <Box sx={styles.licenseBar}>
    <Grid container sx={{ maxWidth: 1500 }} justifyContent="center">
      <Grid item xs={6} sx={styles.idbg}>
        <Box sx={styles.identityBar}>
          <Grid container sx={{ height: "160px" }}>
            <Grid item xs={2.5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  pl: 2,
                  flexDirection: "column",
                  position: "relative",
                  top: 12,
                }}
              >
                <Box
                  sx={{
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    pl: "7px",
                  }}
                >
                  <img
                    src={OutlineNotch}
                    style={{
                      position: "relative",
                      width: "90px",
                      height: "90px",
                      zIndex: 2,
                      border: 1,
                      borderRadius: 2,
                      borderColor: theme.palette.grey.B200,
                    }}
                    alt="profile bg"
                  />
                  <img
                    src={profileImg}
                    style={{
                      position: "relative",
                      bottom: "90px",
                      width: "85px",
                      height: "85px",
                      zIndex: 1,
                      clipPath:
                        "polygon(3% 3%, 80% 5%, 100% 25%, 99% 99%, 22% 100%, 2% 80%)",
                    }}
                    alt="profile img"
                  />
                </Box>
                <Box sx={{ position: "absolute", mt: "95px", ml: "8px" }}>
                  <Typography variant="welcomeGreySm" align="left">
                    Member Since
                  </Typography>
                  <Typography variant="welcomeWhiteMd" align="center">
                    {formatDate(user?.createdAt)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  py: 0,
                  height: "100%",
                }}
              >
                <Typography variant="welcomeWhiteLg">My Stats</Typography>
                <Box sx={{ py: 2, width: "100%" }}>
                  <Grid container>
                    <Grid item xs={3} sx={{ pr: 2 }}>
                      <Box sx={styles.square}>
                        <Typography variant="welcomeWhiteXl">
                          {user?.cardCount}
                        </Typography>
                        <Typography
                          variant="welcomeGreySm"
                          sx={{ position: "relative", bottom: 5 }}
                        >
                          Total Cards
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ pr: 2 }}>
                      <Box sx={styles.square}>
                        <Typography variant="welcomeWhiteXl">
                          {abbreviateNumber(user?.collectionValue)}
                          {user?.collectionValue > 999 && (
                            <Typography variant="lg">k</Typography>
                          )}
                        </Typography>
                        <Typography
                          variant="welcomeGreySm"
                          sx={{ position: "relative", bottom: 5 }}
                        >
                          Total Value
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ pr: 2 }}>
                      <Box sx={styles.square}>
                        <Typography variant="welcomePrimaryXl">
                          {user?.followerCount || 0}
                        </Typography>
                        <Typography
                          variant="welcomeGreySm"
                          sx={{ position: "relative", bottom: 5 }}
                        >
                          Followers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ pr: 2 }}>
                      <Box sx={styles.square}>
                        <Typography variant="welcomePrimaryXl">
                          {user?.followingCount || 0}
                        </Typography>
                        <Typography
                          variant="welcomeGreySm"
                          sx={{ position: "relative", bottom: 5 }}
                        >
                          Following
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Link to="/add-cards" style={{ textDecoration: "none" }}>
          <Box sx={styles.addCards}>
            <img
              src={AddCardsBlue}
              alt="add cards"
              style={{ height: 80 }}
            />
            <Button
              variant="text"
              sx={{ position: "relative", bottom: 10 }}
            >
              Add Cards
            </Button>
          </Box>
        </Link>
      </Grid>
    </Grid>
  </Box>
  :
  <Box pt={1}>
    <Grid container sx={{ width: "100%" }} justifyContent="center">
      <Grid item xs={12}>
        <Box sx={styles.mobileLicense}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 1,
            }}
          >
            <Box sx={{ mb: "-65px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "relative",
                  top: 22,
                }}
              >
                <Box
                  sx={{
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={handleProfileClick}
                >
                  <img
                    src={OutlineNotch}
                    style={{
                      position: "relative",
                      width: "90px",
                      height: "90px",
                      zIndex: 2,
                      border: 1,
                      borderRadius: 2,
                      borderColor: theme.palette.grey.B200,
                    }}
                    alt="profile bg"
                  />
                  <img
                    src={profileImg}
                    style={{
                      position: "relative",
                      bottom: "90px",
                      width: "85px",
                      height: "85px",
                      zIndex: 1,
                      clipPath:
                        "polygon(3% 3%, 80% 5%, 100% 25%, 99% 99%, 22% 100%, 2% 80%)",
                    }}
                    alt="profile img"
                  />
                </Box>
              </Box>
            </Box>
            { user &&
              <Box sx={{ py: 1 }}>
                <Typography variant="welcomeWhiteLg">
                  Hello, {user?.username}
                </Typography>
                <Typography variant="welcomeGreySm">
                  Heres a summary of your collection and activity
                </Typography>
              </Box>
            }
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  py: 0,
                  height: "100%",
                  width: "100%",
                  px: 1,
                }}
              >
                <Box sx={{ py: 2, width: "100%" }}>
                  <Grid container>
                    <Grid item xs={6} sx={{ pr: 2, pb: 2 }}>
                      <Box sx={styles.square}>
                        <Typography variant="welcomeWhiteXl">
                          {user?.cardCount}
                        </Typography>
                        <Typography
                          variant="welcomeGreySm"
                          sx={{ position: "relative", bottom: 5 }}
                        >
                          Total Cards
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sx={{}}>
                      <Box sx={styles.square}>
                        <Typography variant="welcomeWhiteXl">
                          {abbreviateNumber(user?.collectionValue)}
                          {user?.collectionValue > 999 && (
                            <Typography variant="lg">k</Typography>
                          )}
                        </Typography>
                        <Typography
                          variant="welcomeGreySm"
                          sx={{ position: "relative", bottom: 5 }}
                        >
                          Total Value
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ pr: 2 }}>
                      <Box sx={styles.squareTall}>
                        <Typography variant="welcomePrimaryXl">
                          {user?.followerCount || 0}
                        </Typography>
                        <Typography
                          variant="welcomeGreySm"
                          sx={{ position: "relative", bottom: 5 }}
                        >
                          Followers
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sx={{}}>
                      <Box sx={styles.squareTall}>
                        <Typography variant="welcomePrimaryXl">
                          {user?.followingCount || 0}
                        </Typography>
                        <Typography
                          variant="welcomeGreySm"
                          sx={{ position: "relative", bottom: 5 }}
                        >
                          Following
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} pt={3}>
        <Link to="/add-cards" style={{ textDecoration: "none" }}>
          <Box sx={styles.addCards}>
            <img src={AddCardsBlue} alt="add cards" style={{}} />
            <Typography variant="welcomeNormal">Add Cards</Typography>
          </Box>
        </Link>
      </Grid>
    </Grid>
  </Box>
)

export default LicenseBar;
