import { Box, Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CornerFold from "assets/images/avatar_w_fold.png";
import { CurrentUserContext } from "contexts/CurrentUser";
import { DateTime } from "luxon";
import EmptyCardImg from "assets/images/empty-card-image.png";
import GradeBadge from "components/Grade/Badge";
import { Link } from "react-router-dom";
import PlayerImg from "assets/images/Player.png";
import ShowcaseUserCardCardActionsButton from "components/Showcase/UserCard/Card/ActionsButton";
import Typography from "@mui/material/Typography";
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";
import { getUser } from "components/User/queries";
import { useContext } from "react";
import { useQuery } from "@apollo/client";

const formatDate = date =>
  DateTime.fromISO(date).toRelative();

const ShowcaseUserCardContainer = ({ userCard, isMobile }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const c = userCard?.userCard;
  const userId = c?.user?.id
  const card = {
    id: c?.card?.id ? c?.card?.id : "",
    grade: c?.cardGrade?.grade?.grade ? c?.cardGrade.grade.grade : "",
    gradeVendor: c?.cardGrade?.grade?.gradeVendor
      ? c?.cardGrade.grade.gradeVendor.name
      : "",
    name: c?.card?.name ? c?.card?.name : "No card name",
    year: c?.card?.cardSet.year ? c?.card?.cardSet.year : "",
    number: c?.card?.cardNumber ? c?.card?.cardNumber : "",
    set: c?.card?.cardSet?.name ? c?.card?.cardSet?.name : "",
    currentValue: c?.card?.cardGrade?.currentValue
      ? formatNumberAsCurrency(c?.card?.cardGrade?.currentValue)
      : 0,
    desc: c?.card?.cardSet?.variety
      ? c?.card?.cardSet?.variety === "Base"
        ? ""
        : c?.card?.cardSet?.variety
      : "",
    imageUrl:
      c?.userCardImages?.length > 0
        ? c?.userCardImages?.[0]?.imageUrl
        : c?.card?.frontUrl
          ? c?.card?.frontUrl
          : EmptyCardImg,
    created: userCard?.createdAt ? formatDate(userCard?.createdAt) : "",
  };

  const { data: { getUser: user } = {} } = useQuery(getUser, {
    variables: {
      id: userId,
    },
  });

  const profileImg =
    user?.approvedProfileImages?.length > 0
      ? user?.approvedProfileImages[0]?.imageUrl
      : PlayerImg;

  const detailUrl = `/collectors-cards/${userCard.userCardId}`;
  const profileUrl = `/users/${user?.id}`;
  const ownsCollection =
    currentUser?.authenticatable?.id === userCard?.userCard?.user?.id;
  if (!isMobile) { //TODO: make this work without isMobile conditional. Composition, etc
    return (
      <Box mb={2} sx={{ height: "490px", mr: { md: 2, xs: 0 } }}>
        <Card
          variant="outlined"
          sx={{ height: "490px", transition: "0.3s", width: "270px" }}
        >
          <CardContent
            sx={{
              height: "100%",
              width: "100%",
              padding: 0,
              position: "relative",
            }}
          >
            {ownsCollection && (
              <Box
                sx={{
                  borderLeft: "64px solid transparent",
                  // borderRight: theme => `64px solid ${theme.palette.background.default}`,
                  borderRight: theme => `64px solid transparent`,
                  borderBottom: "64px solid transparent",
                  height: 0,
                  width: 0,
                  position: "absolute",
                  zIndex: 40,
                  right: 0,
                }}
              >
                <Box sx={{ position: "relative", left: 22, bottom: 2 }}>
                  <ShowcaseUserCardCardActionsButton
                    userCollectionCard={userCard}
                  />
                </Box>
              </Box>
            )}
            <Box sx={{ height: "300px" }}>
              <Link to={detailUrl}>
                <Box
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                    margin: "0",
                    background: "#F7F8FC",
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={card?.imageUrl}
                    style={{
                      position: "relative",
                      padding: "16px",
                      objectFit: "contain",
                      zIndex: 1,
                      maxWidth: "-webkit-fill-available",
                      height: "300px",
                    }}
                    alt="card img"
                  />
                </Box>
              </Link>
              <Box
                sx={{
                  position: "relative",
                  top: "-15px",
                  width: "40px",
                  left: 215,
                }}
              >
                <Box>
                  <GradeBadge
                    gradeVendor={card?.gradeVendor}
                    grade={card?.grade}
                    height={48}
                    width={48}
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <Grid container p={1}>
                <Grid item xs={8}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="cardGreySm" align="left">
                      {card?.year}
                    </Typography>
                    <Typography variant="cardLg" align="left">
                      {card?.name}
                    </Typography>
                    <Typography variant="cardMd" align="left">
                      {card?.set} {card?.desc}
                    </Typography>
                    <Typography variant="cardGreySm" align="left">
                      #{card?.number}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      textAlign: "right",
                    }}
                  >
                    <Typography align="right" variant="h4">
                      {card?.currentValue ? card.currentValue : ""}
                    </Typography>
                    <Typography align="right" variant="cardGreySm">
                      {card?.currentValue ? "Comp Value" : ""}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ position: "relative", bottom: 49, left: 3 }}>
          <Link to={profileUrl} style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {/* <img src={CornerFold} alt="corner fold" style={{ position: 'relative', height: '50px', width: '50px', zIndex: 0}}/> */}
                  <img
                    src={CornerFold}
                    style={{
                      position: "relative",
                      left: -2,
                      top: 0,
                      width: "48px",
                      height: "48px",
                      zIndex: 2,
                      borderBottomLeftRadius: "4px",
                    }}
                    alt="profile img"
                  />
                  <img
                    src={profileImg}
                    style={{
                      position: "absolute",
                      overflow: "hidden",
                      height: "42px",
                      width: "42px",
                      objectFit: "cover",
                      zIndex: 1,
                      margin: "auto",
                    }}
                    alt="profile img"
                  />
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: "0px",
                  }}
                >
                  <Typography variant="cardLg" align="left">
                    {user?.username ? user.username : "No Name"}
                  </Typography>
                  <Typography variant="cardGreySm" align="left">
                    Added {card?.created}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box pb={2} mr={2}>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            transition: "0.3s",
            height: "70vh",
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              width: "100%",
              padding: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ height: "70%" }}>
              <Link to={detailUrl}>
                <Box
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                    margin: "0",
                    background: "#F7F8FC",
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={card?.imageUrl}
                    style={{
                      position: "relative",
                      padding: "8px",
                      objectFit: "contain",
                      maxWidth: "-webkit-fill-available",
                      zIndex: 1,
                    }}
                    alt="profile img"
                  />
                </Box>
              </Link>
            </Box>
            <Box
              sx={{
                position: "relative",
                top: "-15px",
                width: "40px",
                left: "80%",
              }}
            >
              <Box>
                <GradeBadge
                  gradeVendor={card?.gradeVendor}
                  grade={card?.grade}
                  height={48}
                  width={48}
                />
              </Box>
            </Box>
            <Grid
              container
              p={1}
              sx={{ marginTop: card?.grade !== "-" ? "-36px" : 0 }}
            >
              <Grid item xs={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography variant="cardGreySm" align="left">
                    {card?.year}
                  </Typography>
                  <Typography variant="cardLg" align="left">
                    {card?.name}
                  </Typography>
                  <Typography variant="cardMd" align="left">
                    {card?.set} {card?.desc}
                  </Typography>
                  <Typography variant="cardGreySm" align="left">
                    #{card?.number}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    textAlign: "right",
                  }}
                >
                  <Typography align="right" variant="h4">
                    {card?.currentValue ?? ""}
                  </Typography>
                  <Typography align="right" variant="small">
                    {card?.currentValue ?? "Comp Value"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    height: "70px",
                    position: "absolute",
                    bottom: 0,
                    width: "220px",
                    marginLeft: "-9px",
                  }}
                >
                  <Grid container>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          position: "relative",
                          bottom: -5,
                        }}
                      >
                        {/* <img src={CornerFold} alt="corner fold" style={{ position: 'relative', height: '50px', width: '50px', zIndex: 0}}/> */}
                        <img
                          src={CornerFold}
                          style={{
                            position: "relative",
                            left: -2,
                            top: -2,
                            width: "50px",
                            height: "48px",
                            zIndex: 2,
                          }}
                          alt="profile img"
                        />
                        <img
                          src={profileImg}
                          style={{
                            position: "absolute",
                            overflow: "hidden",
                            height: "45px",
                            width: "45px",
                            objectFit: "cover",
                            zIndex: 1,
                            margin: "auto",
                          }}
                          alt="profile img"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={9}>
                      <Link to={profileUrl} style={{ textDecoration: "none" }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            paddingLeft: "10px",
                          }}
                        >
                          <Typography variant="cardMdBold" align="left">
                            {user?.username ?? "No Name"}
                          </Typography>
                          <Typography variant="cardGreySm" align="left">
                            Joined{" "}
                            {user?.profile?.createdAt
                              ? formatDate(user.profile.createdAt)
                              : "-"}
                          </Typography>
                        </Box>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  }
};

export default ShowcaseUserCardContainer;
