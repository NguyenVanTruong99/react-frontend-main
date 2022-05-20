import { Box, Grid, IconButton, Typography } from "@mui/material";

import IosShareIcon from "@mui/icons-material/IosShare";
import ModalPrompt from "components/ModalPrompt";
import NoxxPattern from "assets/images/backgrounds/noxx-bg-md.png";
import OutlineNotch from "assets/images/notches/medium-transparent.png";
import ShowcaseCardActionsButton from "../Card/ActionsButton";
import ShowcaseLogo from "assets/images/icons/showcase.png";
import ShowcaseUserCard from "components/ShowcaseUserCard";
import UserCollectionFollowerButton from "components/UserCollectionFollower/Button";
import styles from "./ShowcaseDetailStyles";
import { DateTime } from "luxon";
import LoadingButton from "@mui/lab/LoadingButton";

const formatDate = date => DateTime.fromISO(date).toFormat("MMM d, yyyy");

const truncateString = string => {
  if (string.length > 200) {
    return string.substring(0, 200) + "...";
  }
  return string;
};

const ShowcaseDetailView = ({
  showcase,
  isFollowing,
  user,
  currentUser,
  profileImg,
  userCollectionCards,
  onShare,
  handleViewProfile,
  isOwner,
  copyOpen,
  handleCopyClose,
  hasMoreItems,
  onLoadMoreClick,
  screenSize,
  avatarImgSize,
  avatarFrameSize,
  listLoading,
}) => (
  <>
    <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Box m={0} sx={styles.headerImageBox}>
        <Box sx={styles.headerImage}>
          <img src={NoxxPattern} alt="Noxx" style={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={styles.headerContentBox}>
            <Typography
              sx={{
                fontSize: { md: "48px", xs: "24px" },
                bottom: 0,
                lineHeight: { xs: "29.52px", md: "inherit" },
              }}
              align="center"
              color="text.white"
              variant="showcaseLg"
            >
              {showcase.name}
            </Typography>
            <Box
              sx={{
                height: { md: "40px", xs: "16.89px" },
                mt: { md: "auto", xs: "8px" },
              }}
            >
              <img
                src={ShowcaseLogo}
                alt="Showcase"
                style={{ height: "100%" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: { md: "10%", xs: "4%" },
          top: 160,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={OutlineNotch}
            alt="Notch"
            onClick={handleViewProfile}
            style={{
              cursor: "pointer",
              width: avatarFrameSize,
              height: avatarFrameSize,
              objectFit: "fit",
              zIndex: 5,
              borderRadius: "8px",
            }}
          />
          <img
            src={profileImg}
            alt="Profile"
            onClick={handleViewProfile}
            style={{
              cursor: "pointer",
              width: avatarImgSize,
              height: avatarImgSize,
              objectFit: "cover",
              zIndex: 4,
              position: "relative",
              bottom: avatarFrameSize,
              borderRadius: "8px",
              clipPath:
                "polygon(2% 3%, 80% 5%, 100% 25%, 100% 100%, 22% 100%, 2% 80%)",
            }}
          />
        </Box>

        {/* <UserFollowerButton userId={user?.id} sx={{ position: 'relative', bottom: 135 }} onChange={refetch} /> */}
        <Box
          sx={{
            position: "relative",
            bottom: 135,
            display: { md: "flex", xs: "none" },
          }}
        >
          {!!currentUser &&
            currentUser.authenticatable.id !== showcase.userId && (
              <UserCollectionFollowerButton
                isFollowing={isFollowing}
                userCollectionId={showcase.id}
                screenSize={screenSize}
              />
            )}
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { md: 100, xs: 74 },
          right: "3%",
          background: "black",
          borderRadius: "100%",
          padding: "3px",
          display: "flex",
          justifyContent: "center",
          zIndex: 5,
        }}
      >
        <IconButton onClick={onShare} sx={{ zIndex: 5 }}>
          <IosShareIcon color="grey" />
        </IconButton>
      </Box>
      <Box
        sx={{
          m: { md: 4, xs: 0 },
          marginTop: { md: "200px", xs: "123px" },
        }}
      >
        <Grid
          container
          spacing={4}
          mb={10}
          sx={{ display: { md: "block", sm: "block", xs: "none" } }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ width: 220 }}>
                  <Typography variant="showcaseSm">
                    {user.username ?? "No Name"}
                  </Typography>
                  <Typography variant="greySm">
                    Updated {formatDate(showcase.updatedAt)}
                  </Typography>
                </Box>
                <Box sx={{ position: "relative", right: 8 }}>
                  {/* <Button variant="outlined" onClick={goToMyShowcases}>All My Showcases</Button> */}
                  {isOwner && (
                    <ShowcaseCardActionsButton
                      showcase={showcase}
                      sx={{}}
                      size="large"
                    />
                  )}
                </Box>
              </Box>

              <Box sx={{ width: "100%", ml: -36 }}>
                <Box sx={{ maxWidth: "600px", margin: "0 auto" }}>
                  <Typography align="center" variant="greyLg">
                    {truncateString(showcase.description)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
              fontSize: "14px",
              mt: "32px",
              px: "22px",
              color: "#757470",
              textAlign: "center",
            }}
          >
            {truncateString(showcase.description)}
          </Typography>
          <Box
            sx={{
              display: { md: "none", sm: "none", xs: "flex" },
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              mt: "24px",
            }}
          >
            <Box sx={{}}>
              <Typography variant="h6">{user?.username ?? ""}</Typography>
              <Typography variant="greySm">
                Updated {formatDate(showcase.updatedAt)}
              </Typography>
              <Box>
                {isOwner && (
                  <ShowcaseCardActionsButton
                    showcase={showcase}
                    sx={{ position: "relative" }}
                    size="large"
                  />
                )}
              </Box>
            </Box>
            {!!currentUser &&
              currentUser.authenticatable.id !== showcase.userId && (
                <Box sx={{}}>
                  <UserCollectionFollowerButton
                    isFollowing={isFollowing}
                    userCollectionId={showcase.id}
                  />
                </Box>
              )}
          </Box>
        </Box>

        <Grid
          container
          spacing={0}
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
          }}
        >
          {(userCollectionCards?.edges ?? [])
            .map(edge => edge.node)
            .map(userCollectionCard => (
              <Grid item xs={12} md={4} lg={3} key={userCollectionCard.id}>
                <ShowcaseUserCard userCard={userCollectionCard} />
              </Grid>
            ))}
        </Grid>
      </Box>
      {!!hasMoreItems && (
        <LoadingButton
          loading={listLoading}
          size={"large"}
          variant="contained"
          color="white"
          onClick={onLoadMoreClick}
        >
          Load More
        </LoadingButton>
      )}
    </Box>
    <ModalPrompt
      open={!!copyOpen}
      promptMessage="URL copied to your clipboard!"
      closeMessage="OK"
      actionMessage="Yes"
      handleClose={handleCopyClose}
      handleAction={null}
    />
  </>
);

export default ShowcaseDetailView;
