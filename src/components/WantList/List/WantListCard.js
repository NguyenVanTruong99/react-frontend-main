import { Box, Grid } from "@mui/material";
import Flippy, { BackSide, FrontSide } from "react-flippy";
import { useCallback, useContext, useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CommentIcon from "assets/images/icons/card_comment.svg";
import CornerFold from "assets/images/corner-fold.png";
import { CurrentUserContext } from "contexts/CurrentUser";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import WantListCardActionsButton from "components/WantList/WantListCardActionsButton";

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

const WantListCard = ({ card, isMobile }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setIsFlipped(!isFlipped);
  }, [isFlipped]);

  useEffect(() => {
    if (!card.comment) {
      setIsFlipped(false);
    }
  });

  const detailUrl = "/cards/" + card?.card?.id;
  if (!isMobile) {
    return (
      <Box mr={2} mb={2}>
        <Card
          variant="outlined"
          sx={{
            height: "440px",
            transition: "0.3s",
            width: "270px",
            "&:hover": {
              cursor: "pointer",
              // boxShadow:
              //   "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            },
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
            <Box sx={{ height: "280px" }}>
              {(card.comment || isFlipped) && (
                <Box
                  sx={{
                    position: "absolute",
                    mx: "1px",
                    mt: "1px",
                    zIndex: 8,
                    // background: "white",
                    // borderRadius: "50%",
                    height: 40,
                    width: 40,
                    // boxShadow:
                    //   "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      cursor: "pointer",
                      background: "rgba(37, 138, 255, 0.05)",
                    },
                  }}
                  onClick={handleFlip}
                >
                  <img
                    src={CommentIcon}
                    alt="Comment"
                    style={{ width: 20, height: 20 }}
                  />
                </Box>
              )}
              <Flippy
                flipOnHover={false} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                isFlipped={isFlipped}
                style={{ width: "auto", height: "280px" }}
              >
                <FrontSide style={{ padding: 0, boxShadow: "none" }}>
                  <Link to={detailUrl}>
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                        margin: "0",
                        background: "#F7F8FC",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={card?.card?.frontUrl}
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
                </FrontSide>
                <BackSide style={{ padding: 0, boxShadow: "none" }}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      overflow: "hidden",
                      margin: "0",
                      background: "#F7F8FC",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        background: "white",
                        width: "70%",
                        p: 3,
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                    >
                      {card.comment && (
                        <>
                          <Box>
                            <Typography variant="cardLg">Comment:</Typography>
                          </Box>
                          <Box>
                            <Typography>{card?.comment}</Typography>
                          </Box>
                        </>
                      )}
                    </Box>
                  </Box>
                </BackSide>
              </Flippy>
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
                    {card?.card?.cardSet.year}
                  </Typography>
                  <Typography variant="cardLg" align="left">
                    {card?.card?.name}
                  </Typography>
                  <Typography variant="cardMd" align="left">
                    {card?.card?.cardSet.name} {card?.card?.cardSet.variety}
                  </Typography>
                  <Typography variant="cardGreySm" align="left">
                    #{card?.card?.cardNumber}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: 0,
              position: "relative",
              width: "270px",
            }}
          >
            <Box>
              <img
                src={CornerFold}
                alt="corner fold"
                style={{
                  position: "absolute",
                  bottom: 8,
                  left: 0,
                  height: "50px",
                  width: "50px",
                  zIndex: 2,
                  borderBottomLeftRadius: "4px",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                right: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Box>
                {card.budgetLow || card.budgetHigh ? (
                  <>
                    {card.budgetLow && (
                      <Typography variant="budget">
                        {formatAsCurrency(card.budgetLow ?? 0)}
                      </Typography>
                    )}
                    {card.budgetHigh && card.budgetLow && (
                      <Typography variant="budget"> - </Typography>
                    )}
                    {card.budgetHigh && (
                      <Typography variant="budget">
                        {formatAsCurrency(card.budgetHigh)}
                      </Typography>
                    )}
                  </>
                ) : (
                  <Typography variant="budgetSm">No Budget Set</Typography>
                )}
              </Box>
              <Box>
                <>
                  <Typography variant="cardMd">
                    {card.willBuy ? "Buy" : ""}
                  </Typography>
                  <Typography variant="cardMd">
                    {card.willBuy && card.willTradeFor ? " or " : ""}
                  </Typography>
                  <Typography variant="cardMd">
                    {card.willTradeFor ? "Trade" : ""}
                  </Typography>
                </>
              </Box>
            </Box>
          </CardActions>
        </Card>
        <Box sx={{ position: "relative" }}>
          <WantListCardActionsButton
            wantlistCard={card?.card}
            wlCard={card}
            color="primary"
            editOnly={isFlipped}
            sx={{ position: "absolute", right: 0, top: -440, zIndex: 8 }}
          />
          {/* <WantListAddRemoveIconButton cardId={card?.card?.id} /> */}
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
              justifyContent: "flex-start",
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
                    src={card?.card?.frontUrl}
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
            <Box p={1} pt={0}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="cardGreySm" align="left">
                  {card?.card?.cardSet.year}
                </Typography>
                <Typography variant="cardLg" align="left">
                  {card?.card?.cardSet.name}
                </Typography>
                <Typography variant="cardMd" align="left">
                  {card?.card?.cardSet.set} {card?.card?.cardSet.desc}
                </Typography>
                <Typography variant="cardGreySm" align="left">
                  #{card?.card?.cardNumber}
                </Typography>
              </Box>
            </Box>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: 0,
                position: "relative",
              }}
            ></CardActions>
          </CardContent>
        </Card>
      </Box>
    );
  }
};

export default WantListCard;
