import * as React from "react";

import { Box, Button } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { DateTime } from "luxon";
// import { Nav } from 'react-bootstrap';
import OutlineNotch from "assets/images/notches/medium.png";
import PlayerImg from "assets/images/Player.png";
import Typography from "@mui/material/Typography";
// import { useMediaQuery } from '@mui/material';
import UserFollowerButton from "components/UserFollower/Button";
import { getUser } from "components/User/queries";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

const formatDate = date => {
  return DateTime.fromISO(date).toFormat("MMM, yy");
};

const CollectorView = ({ collectorId, collector, isMobile }) => {
  const navigate = useNavigate();
  // const { error, data } = useQuery(getUser, {
  //   variables: {
  //     id: userId,
  //   }
  // })
  let currentCollector = {};

  if (!!collector) {
    currentCollector = {
      userId: collector.id,
      username: collector.username ? collector.username : "No Username",
      memberSince: collector.profile?.createdAt
        ? formatDate(collector.profile?.createdAt)
        : "-",
      profileImgUrl:
        collector?.approvedProfileImages.length > 0
          ? collector?.approvedProfileImages[0]?.imageUrl
          : PlayerImg,
    };
  } else {
    return null;
  }
  const handleClick = () => {
    navigate(`/users/${currentCollector?.userId}`);
  };

  const variant = username => {
    if (username.length > 14) {
      return "cardMdSm";
    }
    return "cardMd";
  };

  //function to shorten username if more than 20 characters
  const shortenUsername = username => {
    if (username.length > 17) {
      return username.substring(0, 15) + "...";
    }
    return username;
  };

  if (!isMobile) {
    return (
      <Box pb={2} mr={2}>
        <Card
          variant="outlined"
          sx={{
            height: "280px",
            transition: "0.3s",
            width: "150px",
            "&:hover": {
              cursor: "pointer",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            },
          }}
        >
          <Box onClick={handleClick}>
            <Box sx={{ height: "150px", overflow: "hidden", margin: "0" }}>
              <img
                src={OutlineNotch}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                }}
                alt="profile img"
              />
              <img
                src={
                  currentCollector?.profileImgUrl
                    ? currentCollector.profileImgUrl
                    : PlayerImg
                }
                style={{
                  position: "relative",
                  top: "-92%",
                  height: "80%",
                  width: "80%",
                  objectFit: "cover",
                  zIndex: 1,
                  margin: "auto",
                }}
                alt="profile img"
              />
            </Box>
            <Box px={2} py={1}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  noWrap
                  variant={variant(currentCollector?.username)}
                  sx={{ mb: 1.5 }}
                >
                  {shortenUsername(currentCollector?.username)}
                </Typography>
                <Typography
                  variant="cardGreyXs"
                  align="left"
                  sx={{ fontSize: "0.8rem", marginTop: "-8px" }}
                >
                  Joined {currentCollector?.memberSince}
                </Typography>
              </Box>
            </Box>
          </Box>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "8px",
              pb: 2,
            }}
          >
            <UserFollowerButton userId={currentCollector.userId} />
          </CardActions>
        </Card>
      </Box>
    );
  } else {
    return (
      <Box pb={3} mx={1}>
        <Card
          variant="outlined"
          sx={{
            height: "280px",
            transition: "0.3s",
            width: "150px",
            "&:hover": {
              cursor: "pointer",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            },
          }}
        >
          <Box onClick={handleClick}>
            <Box sx={{ height: "150px", overflow: "hidden", margin: "0" }}>
              <img
                src={OutlineNotch}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                }}
                alt="profile img"
              />
              <img
                src={
                  currentCollector?.profileImgUrl
                    ? currentCollector.profileImgUrl
                    : PlayerImg
                }
                style={{
                  position: "relative",
                  top: "-92%",
                  height: "80%",
                  width: "80%",
                  objectFit: "cover",
                  zIndex: 1,
                  margin: "auto",
                }}
                alt="profile img"
              />
            </Box>
            <Box px={2} py={1}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="cardMd" sx={{ mb: 1.5, fontSize: "12px" }}>
                  {currentCollector?.username}
                </Typography>
                <Typography
                  variant="cardGreyXs"
                  align="left"
                  sx={{ fontSize: "0.8rem", marginTop: "-8px" }}
                >
                  Joined {currentCollector?.memberSince}
                </Typography>
              </Box>
            </Box>
          </Box>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "8px",
              pb: 2,
            }}
          >
            <UserFollowerButton userId={currentCollector.userId} />
          </CardActions>
        </Card>
      </Box>
    );
  }
};

export default CollectorView;
