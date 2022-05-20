import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import AddCards from "assets/svg/icons/add_cards_white.svg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardImage from "components/Card/Image";
import CornerFold from "assets/images/corner-fold.png";
import ModalPrompt from "components/ModalPrompt";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Typography from "@mui/material/Typography";
import WantListAddRemoveIconButton from "components/WantList/AddRemoveIconButton";
import { createUserCard } from "components/UserCard/mutations";
import { useMutation } from "@apollo/client";

const CardView = ({
  card,
  isMobile,
  handleChildClick,
  excluded,
  handleModalAddConfirmOpen,
  handleOpenLogin,
  currentUser
}) => {
  const navigate = useNavigate();
  const cardId = card.id;
  const [modalAddCardOpen, setModalAddCardOpen] = useState(false);
  const [adding, setAdding] = useState(false);
  const handleModalAddCardOpen = useCallback(
    () => setModalAddCardOpen(true),
    []
  );
  const handleModalAddCardClose = useCallback(
    () => setModalAddCardOpen(false),
    []
  );
  const [modalAddDetailOpen, setModalAddDetailOpen] = useState(false);
  const handleModalAddDetailOpen = useCallback(
    () => setModalAddDetailOpen(true),
    []
  );
  const handleModalAddDetailClose = useCallback(
    () => [
      setModalAddDetailOpen(false),
      handleChildClick(cardId),
      handleModalAddConfirmOpen(),
    ],
    [handleModalAddConfirmOpen, cardId, handleChildClick]
  );

  const [addedCardId, setAddedCardId] = useState("");
  const [create] = useMutation(createUserCard, {
    variables: {
      input: {
        cardId,
        isStaged: false,
      },
    },
    refetchQueries: [],
  });

  const handleAddToCollectionClick = useCallback(
    () =>
      Promise.resolve(null)
        .then(() => setAdding(true))
        .then(create)
        .then(handleModalAddCardClose())
        .then(({ data: { createUserCard } }) => createUserCard)
        .then(userCard => {
          handleModalAddDetailOpen();
          setAddedCardId(userCard.id);
        })
        .catch(() => window.alert("Something went wrong."))
        .finally(() => setAdding(false)),
    [create, handleModalAddCardClose, handleModalAddDetailOpen]
  );

  const handleModalAddDetailAction = useCallback(() => {
    navigate(`/add-cards/${addedCardId}/details`);
  }, [navigate, addedCardId]);

  const detailUrl = "/cards/" + card.id;
  if (excluded) return <></>;
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
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
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
                  <CardImage
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
                  {card?.set.length + card?.desc.length > 28 ? (
                    <Tooltip title={`${card?.set} ${card?.desc}`}>
                      <Typography
                        variant="cardMd"
                        align="left"
                        sx={{
                          width: "100%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {card?.set} {card?.desc}
                      </Typography>
                    </Tooltip>
                  ) : (
                    <Typography
                      variant="cardMd"
                      align="left"
                      sx={{
                        width: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {card?.set} {card?.desc}
                    </Typography>
                  )}
                  <Typography variant="cardGreySm" align="left">
                    #{card?.number}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: 0,
                position: "absolute",
                width: "270px",
                bottom: 20,
              }}
            >
              <Box>
                <img
                  src={CornerFold}
                  alt="corner fold"
                  style={{
                    position: "absolute",
                    bottom: -3,
                    left: 0,
                    height: "50px",
                    width: "50px",
                    zIndex: 2,
                    borderBottomLeftRadius: "4px",
                  }}
                />
              </Box>
              <Box sx={{ position: "relative", top: 7.5 }}>
                <IconButton
                  size="small"
                  variant="outlined"
                  sx={{ color: "#258aff", borderColor: "#258aff" }}
                  onClick={currentUser ? handleModalAddCardOpen : handleOpenLogin}
                >
                  <img
                    src={AddCards}
                    alt="add card"
                    style={{
                      height: "42px",
                      width: "42px",
                      padding: "4px",
                      filter:
                        "invert(39%) sepia(90%) saturate(1504%) hue-rotate(195deg) brightness(100%) contrast(103%)",
                    }}
                  />
                </IconButton>
                <IconButton sx={{ opacity: "0.8" }}>
                  {currentUser ? <WantListAddRemoveIconButton cardId={cardId} size="large" />
                    : <StarOutlineIcon sx={{
                      cursor: "pointer",
                    }}
                      fontSize={"large"}
                      color="primary"
                      onClick={handleOpenLogin} />
                  }

                </IconButton>
              </Box>
            </CardActions>
          </CardContent>
        </Card>
        <ModalPrompt
          open={!!modalAddCardOpen}
          promptMessage="Add this card to your collection?"
          closeMessage="No"
          actionMessage="Yes"
          handleClose={handleModalAddCardClose}
          handleAction={handleAddToCollectionClick}
        />
        <ModalPrompt
          open={!!modalAddDetailOpen}
          promptMessage="Add your card's details now?"
          closeMessage="No"
          actionMessage="Yes"
          handleClose={handleModalAddDetailClose}
          handleAction={handleModalAddDetailAction}
        />
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
            </Box>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: 0,
                position: "relative",
              }}
            >
              {/* <Box sx={{position: 'absolute', top: 58, left: 0,}}>
                                <img src={CornerFold} alt="corner fold" style={{  height: '50px', width: '50px', zIndex: 2 }} />
                            </Box> */}
              <Box sx={{ position: "absolute", top: 15 }}>
                <IconButton
                  size="small"
                  variant="outlined"
                  sx={{ color: "#258aff", borderColor: "#258aff" }}
                  onClick={handleModalAddCardOpen}
                >
                  <img
                    src={AddCards}
                    alt="add card"
                    style={{
                      height: "42px",
                      width: "42px",
                      padding: "4px",
                      filter:
                        "invert(39%) sepia(90%) saturate(1504%) hue-rotate(195deg) brightness(100%) contrast(103%)",
                    }}
                  />
                </IconButton>
                <IconButton sx={{ opacity: "0.8" }}>
                  <WantListAddRemoveIconButton cardId={cardId} size="large" />
                </IconButton>
              </Box>
            </CardActions>
          </CardContent>
        </Card>
        <ModalPrompt
          open={!!modalAddCardOpen}
          promptMessage="Add this card to your collection?"
          closeMessage="No"
          actionMessage="Yes"
          handleClose={handleModalAddCardClose}
          handleAction={handleAddToCollectionClick}
        />
        <ModalPrompt
          open={!!modalAddDetailOpen}
          promptMessage="Add your card's details now?"
          closeMessage="No"
          actionMessage="Yes"
          handleClose={handleModalAddDetailClose}
          handleAction={handleModalAddDetailAction}
        />
      </Box>
    );
  }
};

export default CardView;
