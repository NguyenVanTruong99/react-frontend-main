import * as React from "react";

import { Box, Button, Grid } from "@mui/material";
import { useCallback, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";

import AddBoxIcon from "@mui/icons-material/AddBox";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CurrentUserContext } from "contexts/CurrentUser";
import DemoCardImg from "assets/images/demo/sample2.jpg";
import EmptyCardImg from "assets/images/empty-card-image.png";
import EyeIcon from "@mui/icons-material/RemoveRedEye";
import ImageViewer from "components/ImageViewer";
import { Link } from "react-router-dom";
// import { Nav } from 'react-bootstrap';
import OutlineNotch from "assets/images/notches/medium.png";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Typography from "@mui/material/Typography";
import { createUserCard } from "components/UserCard/mutations";
import { getCard } from "components/Card/queries";
import { useState } from "react";

const CardView = ({ card, isMobile }) => {
  const cardId = card.id;
  const detailUrl = "/cards/" + card.id;
  if (!isMobile) {
    return (
      <Box>
        <Card
          variant="outlined"
          sx={{ height: "430px", transition: "0.3s", width: "270px" }}
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
            <Box sx={{ height: "280px" }}>
              <Link to={detailUrl}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    margin: "0",
                    borderBottom: "1px solid #9fa2b4",
                    background: "#F7F8FC",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={card?.imageUrl}
                    style={{
                      position: "relative",
                      padding: "16px",
                      zIndex: 1,
                      maxWidth: "-webkit-fill-available",
                      objectFit: "contain",
                    }}
                    alt="profile img"
                  />
                </Box>
              </Link>
            </Box>
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
              <Grid item xs={4}>
                <Box>
                  <Typography align="right" variant="h4">
                    {card?.totalGraded}
                  </Typography>
                  <Typography align="right" variant="cardSm">
                    Total PSA Graded
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  } else {
    return (
      <Box pb={2} mr={2}>
        <Card variant="outlined" sx={{ transition: "0.3s", height: "70vh" }}>
          <CardContent
            sx={{
              height: "100%",
              width: "100%",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ height: "70%" }}>
              <Link to={detailUrl}>
                <Box
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                    margin: "0",
                    borderBottom: "1px solid #9fa2b4",
                    background: "#F7F8FC",
                    padding: "30px",
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
                      maxWidth: "-webkit-fill-available",
                      zIndex: 1,
                    }}
                    alt="profile img"
                  />
                </Box>
              </Link>
            </Box>
            <Grid container p={1}>
              <Grid item xs={12}>
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
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  }
};

export default CardView;
