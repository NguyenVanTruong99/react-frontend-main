import { Box, Grid } from "@mui/material";
import { useQuery } from "@apollo/client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CornerFold from "assets/images/avatar_w_fold.png";
import { DateTime } from "luxon";
import EmptyCardImg from "assets/images/empty-card-image.png";
import GradeBadge from "components/Grade/Badge";
import { Link } from "react-router-dom";
import PlayerImg from "assets/images/Player.png";
import Typography from "@mui/material/Typography";
import { getUser } from "components/User/queries";
import CardImage from "components/Card/Image";

const formatDate = date => {
  return DateTime.fromISO(date).toRelative();
};

function addCommas(x) {
  if (!!x) {
    return x
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else return "0";
}
function formatAsCurrency(x) {
  return "$" + addCommas(x);
}

const CardView = ({ userCard, isMobile }) => {
  let card = {};
  let userId;
  if (!!userCard) {
    const c = userCard;
    userId = c.user.id;
    card = {
      id: c.id ? c.id : "",
      grade: c.displayGrade ? c.displayGrade.grade : "-",
      gradeVendor: c.displayGrade?.gradeVendor
        ? c.displayGrade.gradeVendor?.name
        : "",
      name: c.card?.name ? c.card.name : "No card name",
      year: c.year ? c.year : "",
      number: c.cardNumber ? c.cardNumber : "",
      set: c.card?.cardSet?.name ? c.card.cardSet.name : "",
      currentValue: c.cardGrade?.currentValue
        ? formatAsCurrency(c.cardGrade?.currentValue)
        : 0,
      desc: c.cardSet?.variety
        ? c.cardSet.variety === "Base"
          ? ""
          : c.cardSet.variety
        : "",
      imageUrl:
        c.userCardImages.length > 0
          ? c.userCardImages[0].imageUrl
          : c.card?.frontUrl
          ? c.card.frontUrl
          : EmptyCardImg,
      created: c.createdAt ? formatDate(c.createdAt) : "",
    };
  }
  const { error2, data: { getUser: user } = {} } = useQuery(getUser, {
    variables: {
      id: userId,
    },
  });

  const profileImg =
    user?.approvedProfileImages.length > 0
      ? user?.approvedProfileImages[0]?.imageUrl
      : PlayerImg;

  const detailUrl = "/collectors-cards/" + card.id;
  const profileUrl = "/users/" + user?.id;
  if (!isMobile) {
    return (
      <Box mr={2}>
        <Card
          variant="outlined"
          sx={{
            height: "490px",
            transition: "0.3s",
            width: "270px",
            "&:hover": { cursor: "pointer", transform: "scale(1.02)" },
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              width: "100%",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
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
                    gradeVendor={card.gradeVendor}
                    grade={card.grade}
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
                <Grid item xs={12}>
                  <Box
                    sx={{
                      height: "70px",
                      position: "absolute",
                      bottom: 5,
                      width: "220px",
                      marginLeft: "-9px",
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography
                          variant="cardGreySm"
                          sx={{ float: "left", padding: "4px 12px" }}
                          align="left"
                        >
                          &nbsp;
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          {/* <img src={CornerFold} alt="corner fold" style={{ position: 'relative', height: '50px', width: '50px', zIndex: 0}}/> */}
                          <img
                            src={CornerFold}
                            style={{
                              position: "relative",
                              left: -2,
                              top: 0,
                              width: "50px",
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
                      <Grid item xs={8}>
                        <Link
                          to={profileUrl}
                          style={{ textDecoration: "none" }}
                        >
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
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
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
                  <CardImage
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
                  gradeVendor={card.gradeVendor}
                  grade={card.grade}
                  height={48}
                  width={48}
                />
              </Box>
            </Box>
            <Grid
              container
              p={1}
              sx={{ marginTop: card.grade !== "-" ? "-36px" : 0 }}
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
                  <Typography variant="cardGreySm" align="left">
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
                    {card?.currentValue ? card.currentValue : ""}
                  </Typography>
                  <Typography align="right" variant="small">
                    {card?.currentValue ? "Comp Value" : ""}
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
                            {user?.username ? user.username : "No Name"}
                          </Typography>
                          <Typography variant="cardGreySm" align="left">
                            Joined{" "}
                            {user?.profile?.createdAt
                              ? formatDate(user?.profile?.createdAt)
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

export default CardView;
