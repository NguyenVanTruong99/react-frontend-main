/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import BcgImg from "assets/images/banners/bcg.png";
import { Box } from "@mui/system";
import { DateTime } from "luxon";
import EditAvatar from "./EditAvater";
import IosShareIcon from "@mui/icons-material/IosShare";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotchBottom from "assets/images/Bg-rounded.png";
import NoxxBg from "assets/images/Bg-md-nopattern.png";
import NoxxPattern from "assets/images/backgrounds/noxx-bg-md.png";
import OutlineNotch from "assets/images/notches/medium-transparent.png";
import OutlineNotchTransparent from "assets/images/notches/small.png";
import PlayerImg from "assets/images/Player.png";
import ShowcaseList from "components/Showcase/List";
import SkeeImg from "assets/images/banners/skee_white.png";
import SocialButtons from "./SocialButtons";
import SocialLinks from "./SocialLinks";
import { USER_CARD_TABLE_COLS } from "constants/cards";
import UserCardTable from "components/UserCard/Table";
import UserFollowerButton from "components/UserFollower/Button";
import UserFollowerModal from "components/UserFollower/Modal";
import UserProfileFormPrivate from "components/UserProfile/Form/Private";
import UserProfileFormPublic from "components/UserProfile/Form/Public";
import UserProfileFormSocial from "components/UserProfile/Form/Social";
import { getUser } from "components/User/queries";
import { getUserProfile } from "components/UserProfile/queries";
import { listMyShowcases } from "components/UserCollection/queries";
import { listShowcasesByUserId } from "components/UserCollection/queries";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

const formatDate = date => {
  return DateTime.fromISO(date).toFormat("MMM yyyy");
};

const ProfileView = ({
  userId,
  isCurrentUser,
  isEditing,
  sportId,
  handleResults,
  onShare,
  isSkee,
  isBcg,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [communityModalTab, setCommunityModalTab] = useState("followers");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    refetch,
    error,
    data: { getUser: user } = {},
  } = useQuery(getUser, {
    variables: {
      id: userId,
    },
  });

  const { data: profileData } = useQuery(getUserProfile, {
    skip: !user?.profile?.id,
    variables: {
      id: user?.profile?.id,
    },
  });

  !!error && console.error(error);

  // const { err, data: { listMyShowcases: myShowcases = [] } = {} } = useQuery(listMyShowcases);

  const { error2, data: { listShowcasesByUserId: myShowcases = [] } = {} } =
    useQuery(listShowcasesByUserId, {
      variables: {
        userId,
      },
    });

  const showcaseCount = myShowcases.length ? myShowcases.length : 0;
  const userProfile = profileData?.getUserProfile;
  const social = {
    facebook: userProfile?.facebookUser
      ? userProfile.facebookUser.facebookId
      : "",
    instagram: userProfile?.instagramUser
      ? userProfile.instagramUser.instagramId
      : "",
    twitter: userProfile?.twitterUser ? userProfile.twitterUser.twitterId : "",
    snapchat: userProfile?.snapchatUser
      ? userProfile.snapchatUser.snapchatId
      : "",
    tiktok: userProfile?.tiktokUser ? userProfile.tiktokUser.tiktokId : "",
    youtube: userProfile?.youtubeUser ? userProfile.tiktokUser.youtubeUser : "",
    myslabs: userProfile?.myslabsUser ? userProfile.myslabsUser.myslabsId : "",
    website: userProfile?.websiteUrl ? userProfile.website : "",
  };
  const hasProfileImage = !!user?.approvedProfileImages.length;
  const profileImg = hasProfileImage
    ? user.approvedProfileImages[0].imageUrl
    : PlayerImg;

  const styles = {
    container: {
      margin: theme.spacing(2),
      mobile: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        marginBottom: "87px",
        padding: 0,
      },
    },
    noxxButton: {
      background: "#258aff",
      borderColor: "#258aff",
      width: "150px",
    },
    infoCard: {
      textAlign: "center",
      top: {
        p: 0,
        // borderRight: theme => '1px solid' + theme.palette.grey.B400,
        // '&:last-child': {
        //   borderRight: 'none'
        // },
        mobile: {
          p: 1,
          borderRight: theme => "1px solid" + theme.palette.grey.B400,
          borderBottom: theme => "1px solid" + theme.palette.grey.B400,
          "&:last-child": {
            borderRight: "none",
            borderBottom: "none",
          },
          "&:nth-last-child(2)": {
            borderBottom: "none",
          },
          "&:nth-last-child(3)": {
            borderRight: "none",
          },
        },
      },
      middle: {
        p: { md: 2, xs: 0 },
        borderTop: theme => "1px solid" + theme.palette.grey.B400,
      },
    },
    infoCardBottom: {
      p: 2,
      // borderTop: theme => '1px solid' + theme.palette.grey.B400,
      background: `url(${NotchBottom})`,
      backgroundSize: "cover",
      position: "relative",
      bottom: "50px",
      height: "100px",
      borderBottomRightRadius: "4px",
      color: theme => theme.palette.text.white,
      mobile: {
        borderTop: theme => `1px solid ${theme.palette.grey.B400}`,
      },
    },
    section: {
      margin: theme.spacing(2),
      border: "1px solid",
      borderColor: theme.palette.grey.B200,
    },
  };

  if (!userProfile) return null;

  const handleToggleCommunityModal = (e, selectedTab) => {
    if (!!selectedTab) {
      setCommunityModalTab(selectedTab);
    }

    setIsCommunityModalOpen(prev => !prev);
  };

  const CommunityModal = (
    <UserFollowerModal
      userId={userId}
      isOpen={isCommunityModalOpen}
      currentTab={communityModalTab}
      onTabChange={(e, tab) => setCommunityModalTab(tab)}
      onClose={handleToggleCommunityModal}
      title={
        isCurrentUser
          ? "My Community"
          : (user.username ?? "No username") + `'s ${communityModalTab}`
      }
    />
  );

  let Content;

  if (!isMobile) {
    Content = (
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
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
        <Box style={styles.container}>
          <Box
            m={0}
            sx={{
              height: "150px",
              width: "100vw",
              position: "absolute",
              left: 0,
              top: { md: 80, xs: 60 },
              background: `url(${NoxxBg})`,
              backgroundSize: { md: "100% 100%", xs: "cover" },
              backgroundRepeat: "repeat",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={NoxxPattern}
              alt="Noxx"
              style={{
                width: "70%",
                position: "absolute",
                overflow: "hidden",
                right: 0,
                bottom: 0,
                paddingBottom: "2px",
                zIndex: 2,
              }}
            />
            {isSkee && (
              <img
                src={SkeeImg}
                alt="Skee"
                style={{
                  position: "absolute",
                  top: 30,
                  width: "30%",
                  maxWidth: 360,
                  maxHeight: 100,
                  zIndex: 3,
                }}
              />
            )}
            {isBcg && (
              <img
                src={BcgImg}
                alt="Bcg"
                style={{
                  position: "absolute",
                  top: 30,
                  maxHeight: 100,
                  zIndex: 3,
                }}
              />
            )}
          </Box>
          <Grid container pt={3} sx={{ position: "relative", top: "150px" }}>
            <Grid item xs={2}>
              <Typography variant="greySm" align="left">
                Member Since
              </Typography>
              <Typography variant="showcaseSm" align="left">
                {formatDate(user?.createdAt)}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              {!isEditing && (
                <Box
                  pt={2}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="large" align="center">
                    {user?.username ? user.username : "No Username"}
                  </Typography>
                  <Typography variant="greyMd" align="center">
                    {userProfile?.location ? userProfile.location : "USA"}
                  </Typography>
                  <Typography variant="medium" align="center">
                    {userProfile?.bio ? userProfile.bio : "User bio"}
                  </Typography>
                </Box>
              )}
            </Grid>
            <Grid item xs={2} sx={{ position: "relative", top: "-75px" }}>
              <Box
                sx={{
                  width: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={OutlineNotch}
                  style={{
                    position: "relative",
                    width: "150px",
                    height: "150px",
                    zIndex: 3,
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
                    bottom: "150px",
                    width: "145px",
                    height: "145px",
                    zIndex: 2,
                    clipPath:
                      "polygon(3% 3%, 80% 5%, 100% 25%, 99% 99%, 22% 100%, 2% 80%)",
                  }}
                  alt="profile img"
                />
              </Box>
              {isEditing && (
                <Box
                  component="span"
                  sx={{
                    position: "relative",
                    top: "-190px",
                    left: "130px",
                    zIndex: 5,
                  }}
                >
                  <EditAvatar userId={userId} />
                </Box>
              )}
              <Box
                sx={{
                  position: "relative",
                  top: "-130px",
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {!isEditing ? (
                  isCurrentUser ? (
                    <Button
                      size="medium"
                      variant="contained"
                      sx={styles.noxxButton}
                      onClick={() => navigate("/edit-profile")}
                    >
                      Edit Profile
                    </Button>
                  ) : (
                    <UserFollowerButton userId={userId} onChange={refetch} />
                  )
                ) : (
                  <Button
                    size="medium"
                    variant="outlined"
                    sx={{ bottom: 45, width: "150px" }}
                    onClick={() => navigate("/profile")}
                  >
                    Finished
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
          {isEditing ? (
            <Box sx={{ maxWidth: 1440, margin: "0 auto", marginTop: "-50px" }}>
              <UserProfileFormPublic user={user} />
              <UserProfileFormPrivate user={user} />
              <UserProfileFormSocial user={user} />
              {/* <UserAccountDelete user={user} /> */}
            </Box>
          ) : (
            <Box mt={2}>
              <SocialButtons userProfile={userProfile} />
              <Card
                sx={{ width: "100%", margin: "0 auto", background: "none" }}
              >
                <Box p={0}>
                  <Box sx={styles.infoCard}>
                    <Grid
                      container
                      py={1}
                      sx={{
                        background: "#fdfdfd",
                        border: "1px solid #dfdfdf",
                        borderRadius: "4px",
                      }}
                    >
                      <Grid item xs={6} md={3} sx={styles.infoCard.top}>
                        <Typography variant="cardGreyLg" align="center">
                          Total Cards
                        </Typography>
                        <Typography variant="cardXl" align="center">
                          {user?.cardCount}
                        </Typography>
                        <Divider
                          orientation="vertical"
                          sx={{
                            position: "relative",
                            height: "50px",
                            bottom: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} md={3} sx={styles.infoCard.top}>
                        <Typography variant="cardGreyLg" align="center">
                          Showcases
                        </Typography>
                        <Typography variant="cardXl" align="center">
                          {showcaseCount}
                        </Typography>
                        <Divider
                          orientation="vertical"
                          sx={{
                            position: "relative",
                            height: "50px",
                            bottom: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} md={3} sx={styles.infoCard.top}>
                        <Button
                          onClick={e =>
                            handleToggleCommunityModal(e, "following")
                          }
                          sx={{
                            flexDirection: "column",
                            p: 0,
                            m: 0,
                            fontWeight: "normal",
                          }}
                        >
                          <Typography variant="cardGreyLg" align="center">
                            Following
                          </Typography>
                          <Typography variant="cardXlBlue" align="center">
                            {user?.followingCount || 0}
                          </Typography>
                        </Button>
                      </Grid>
                      <Grid item xs={6} md={3} sx={styles.infoCard.top}>
                        <Button
                          onClick={e =>
                            handleToggleCommunityModal(e, "followers")
                          }
                          sx={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            p: 0,
                            m: 0,
                            fontWeight: "normal",
                          }}
                        >
                          <Divider
                            orientation="vertical"
                            sx={{
                              position: "relative",
                              height: "50px",
                              bottom: "5px",
                              right: "150%",
                            }}
                          />
                          <Box
                            sx={{
                              flexDirection: "column",
                              p: 0,
                              m: 0,
                              fontWeight: "normal",
                            }}
                          >
                            <Typography variant="cardGreyLg" align="center">
                              Followers
                            </Typography>
                            <Typography variant="cardXlBlue" align="center">
                              {user?.followerCount || 0}
                            </Typography>
                          </Box>
                        </Button>
                      </Grid>
                    </Grid>
                    <Box sx={styles.infoCardBottom}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: {
                            xs: "column",
                            sm: "row",
                          },
                          flexWrap: "wrap",
                          alignItems: "center",
                          height: "100%",
                          padding: "0 20px",
                        }}
                      >
                        <SocialLinks userProfile={userProfile} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          )}
        </Box>
      </Box>
    );
  } else {
    Content = (
      <>
        <Box style={styles.container.mobile}>
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
            m={0}
            sx={{
              height: "150px",
              width: "100vw",
              position: "absolute",
              left: 0,
              background: `url(${NoxxBg})`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={NoxxPattern}
              alt="Noxx"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 2,
              }}
            />
            {isSkee && (
              <img
                src={SkeeImg}
                alt="Skee"
                style={{
                  position: "absolute",
                  top: 25,
                  width: "50%",
                  zIndex: 3,
                }}
              />
            )}
          </Box>
          <Box sx={{ position: "relative", top: "97px" }}>
            <Box>
              {hasProfileImage ? (
                <img
                  src={OutlineNotch}
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    zIndex: 2,
                    border: 1,
                    borderRadius: 2,
                    borderColor: theme.palette.grey.B200,
                  }}
                  alt="profile bg"
                />
              ) : (
                <img
                  src={OutlineNotch}
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    zIndex: 2,
                    border: 1,
                    borderRadius: 2,
                    borderColor: theme.palette.grey.B200,
                  }}
                  alt="profile bg"
                />
              )}
              <img
                src={profileImg}
                style={{
                  position: "relative",
                  width: "95px",
                  height: "95px",
                  zIndex: 1,
                  paddingLeft: "1px",
                  clipPath:
                    "polygon(3% 3%, 80% 5%, 100% 25%, 99% 99%, 22% 100%, 2% 80%)",
                }}
                alt="profile img"
              />
              {isEditing && (
                <Box
                  component="span"
                  sx={{
                    position: "relative",
                    top: "-30px",
                    left: "235px",
                    zIndex: 5,
                  }}
                >
                  <EditAvatar userId={userId} />
                </Box>
              )}
            </Box>
          </Box>
          <Grid
            container
            pt={2}
            sx={{ position: "relative", top: "87px", flexDirection: "column" }}
          >
            <Grid item xs={12}>
              {!isEditing ? (
                isCurrentUser ? (
                  <Button
                    size="medium"
                    variant="contained"
                    sx={styles.noxxButton}
                    onClick={() => navigate("/edit-profile")}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: "150px" }}>
                      <UserFollowerButton userId={userId} onChange={refetch} />
                    </Box>
                  </Box>
                )
              ) : (
                <Button
                  size="medium"
                  variant="outlined"
                  sx={{}}
                  onClick={() => navigate("/profile")}
                >
                  Back
                </Button>
              )}
            </Grid>
            <Grid item xs={12}>
              {!isEditing && (
                <Box
                  pt={3}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="large"
                    sx={{ fontSize: "30px" }}
                    align="center"
                  >
                    {user?.username ? user.username : "User"}
                  </Typography>
                  <Typography variant="greyMd" align="center">
                    {userProfile?.location ? userProfile.location : "USA"}
                  </Typography>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} mt={2}>
              <Typography variant="cardGreyLg" align="left">
                Member Since
              </Typography>
              <Typography variant="cardLg" align="center">
                {formatDate(user?.createdAt)}
              </Typography>
            </Grid>
            {isEditing ? (
              <Box mb={4} sx={{ maxWidth: 1440, margin: "0 auto" }}>
                <UserProfileFormPublic user={user} />
                <UserProfileFormPrivate user={user} />
                <UserProfileFormSocial user={user} />
                {/* <UserAccountDelete user={user} /> */}
              </Box>
            ) : (
              <Box my={4}>
                <SocialButtons userProfile={userProfile} />
                <Card sx={{ width: "90%", margin: "0 auto" }}>
                  <Box p={0}>
                    <Box sx={styles.infoCard}>
                      <Grid container p={1}>
                        <Grid item xs={6} sx={styles.infoCard.top.mobile}>
                          <Typography variant="cardGreyLg" align="center">
                            Total Cards
                          </Typography>
                          <Typography variant="cardXl" align="center">
                            {user?.cardCount}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sx={styles.infoCard.top.mobile}>
                          <Typography variant="cardGreyLg" align="center">
                            Showcases
                          </Typography>
                          <Typography variant="cardXl" align="center">
                            {showcaseCount}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sx={styles.infoCard.top.mobile}>
                          <Button
                            onClick={e =>
                              handleToggleCommunityModal(e, "following")
                            }
                            sx={{
                              flexDirection: "column",
                              p: 0,
                              m: 0,
                              fontWeight: "normal",
                            }}
                          >
                            <Typography variant="cardGreyLg" align="center">
                              Following
                            </Typography>
                            <Typography variant="cardXlBlue" align="center">
                              {user?.followingCount || 0}
                            </Typography>
                          </Button>
                        </Grid>
                        <Grid item xs={6} sx={styles.infoCard.top.mobile}>
                          <Button
                            onClick={e =>
                              handleToggleCommunityModal(e, "followers")
                            }
                            sx={{
                              flexDirection: "column",
                              p: 0,
                              m: 0,
                              fontWeight: "normal",
                            }}
                          >
                            <Typography variant="cardGreyLg" align="center">
                              Followers
                            </Typography>
                            <Typography variant="cardXlBlue" align="center">
                              {user?.followerCount || 0}
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>
                      <Box sx={styles.infoCard.middle}>
                        {/* <Typography variant="cardGreyLg" align="center">
                            Collection Concentration
                          </Typography>
                          <Typography variant="medium" align="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography> */}
                      </Box>
                      <Box sx={styles.infoCardBottom.mobile}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: {
                              xs: "column",
                              md: "row",
                            },
                            alignItems: "center",
                            height: "100%",
                            padding: "15px 30px",
                            backgroundColor: "#000000",
                            borderRadius: "5px",
                            color: "#FFFFFF",
                          }}
                        >
                          <SocialLinks userProfile={userProfile} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Box>
            )}
          </Grid>
        </Box>
      </>
    );
  }

  return (
    <>
      {Content}
      {CommunityModal}
      <ShowcaseArea userId={userId} showcaseCount={showcaseCount} />
      <Box p={4} />
      {/* <Box sx={{ mx: 10, my: 6 }}>
        <UserCardTable
          onResults={handleResults}
          columns={[
            USER_CARD_TABLE_COLS.DETAILS,
            USER_CARD_TABLE_COLS.GRADE,
            USER_CARD_TABLE_COLS.PAID,
            USER_CARD_TABLE_COLS.COMP_VALUE,
            USER_CARD_TABLE_COLS.POP,
            USER_CARD_TABLE_COLS.SHOWCASE_COUNT,
            USER_CARD_TABLE_COLS.SPORT,
            USER_CARD_TABLE_COLS.YEAR,
            USER_CARD_TABLE_COLS.STATUS,

          ]}
          showCheckBoxes={true}
          term='*'
          title='My Cards'
          userCards={[1,2,3,4,5]}
        />
      </Box> */}
    </>
  );
};

const ShowcaseArea = ({ userId, showcaseCount }) => {
  const [showMore, setShowMore] = useState(false);
  const numberToShow = 4;

  const handleFetchShowCases = useCallback(
    showcases => setShowMore(showcases?.length <= numberToShow),
    [numberToShow]
  );

  return (
    <Box>
      {showcaseCount > 0 && (
        <Box sx={{ mt: "32px" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 600, textAlign: "center" }}
          >
            Public Showcases
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          m: 2,
          mt: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: { md: "center", xs: "auto" },
          gap: 0,
        }}
      >
        <ShowcaseList
          userId={userId}
          skipHeader
          numberToShow={!showMore ? numberToShow : null}
          onFetchShowcases={handleFetchShowCases}
        />
        {!showMore && (
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ maxWidth: 1200, margin: "0 auto" }}
            variant="outlined"
            onClick={setShowMore.bind(null, true)}
          >
            View More Showcases
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProfileView;
