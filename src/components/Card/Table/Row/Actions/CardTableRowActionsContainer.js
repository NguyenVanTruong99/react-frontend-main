import { useCallback, useContext, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import CardTableRowActionsView from "./CardTableRowActionsView";
import { CurrentUserContext } from "contexts/CurrentUser";
import { createUserCard } from "components/UserCard/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const CardTableRowActionsContainer = ({ item }) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();
  const [addCardsOpen, setAddCardsOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const handleAddCardsOpen = useCallback(
    () => (currentUser ? setAddCardsOpen(true) : setLoginOpen(true)),
    []
  );
  const handleOpenLogin = useCallback(() => setLoginOpen(true), []);
  const handleAddCardsClose = useCallback(() => setAddCardsOpen(false), []);
  const [addCardsConfirmOpen, setAddCardsConfirmOpen] = useState(false);
  const handleAddCardsConfirmOpen = useCallback(
    () => setAddCardsConfirmOpen(true),
    []
  );
  const handleAddCardsConfirmClose = useCallback(
    () => setAddCardsConfirmOpen(false),
    []
  );
  const [addClipOpen, setAddClipOpen] = useState(false);
  const handleAddClipOpen = useCallback(() => setAddClipOpen(true), []);
  const handleAddClipClose = useCallback(() => setAddClipOpen(false), []);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const cardId = item.type === "Card" ? item.card.id : item.userCard.card.id;

  const [create] = useMutation(createUserCard);

  const handleShare = useCallback(
    event => {
      const link =
        item.type === "Card"
          ? `/cards/${cardId}`
          : `/collectors-cards/${cardId}`;
      const url = window.location.origin + link;
      if (navigator.share && isSmall) {
        navigator.share({
          title: "Share Card",
          url: url,
        });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url);
        handleAddClipOpen();
      }
    },
    [item, navigate, handleAddClipOpen]
  );

  const handleAddCardsAction = useCallback(
    event => {
      event.stopPropagation();
      handleAddCardsClose();
      Promise.resolve(null)
        .then(
          create({
            variables: {
              input: {
                cardId: cardId,
                isStaged: false,
              },
            },
          })
        )
        .then(() => handleAddCardsConfirmOpen())
        .catch(() => window.alert("Something went wrong."));
    },
    [create, item, handleAddCardsClose, handleAddCardsConfirmOpen]
  );

  const redirectTo = "/";

  return (
    <CardTableRowActionsView
      cardId={cardId}
      addCardsOpen={addCardsOpen}
      handleAddCardsOpen={handleAddCardsOpen}
      handleAddCardsClose={handleAddCardsClose}
      handleAddCardsAction={handleAddCardsAction}
      addCardsConfirmOpen={addCardsConfirmOpen}
      handleAddCardsConfirmOpen={handleAddCardsConfirmOpen}
      handleAddCardsConfirmClose={handleAddCardsConfirmClose}
      handleShare={handleShare}
      addClipOpen={addClipOpen}
      handleAddClipClose={handleAddClipClose}
      loginOpen={loginOpen}
      handleOpenLogin={handleOpenLogin}
      handleLoginClose={() => setLoginOpen(false)}
      redirectTo={redirectTo}
      currentUser={currentUser}
    />
  );
};

export default CardTableRowActionsContainer;
