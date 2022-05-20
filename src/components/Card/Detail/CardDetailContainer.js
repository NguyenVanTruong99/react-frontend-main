import { useCallback, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import CardDetailView from "./CardDetailView";
import { CurrentUserContext } from "contexts/CurrentUser";
import PlayerImg from "assets/images/Player.png";
import { createUserCard } from "components/UserCard/mutations";
import { getCard } from "components/Card/queries";
import { getUser } from "components/User/queries";
import { getUserCard } from "components/UserCard/queries";
import theme from "theme.js";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardDetailContainer = ({ cardId, userCardId }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [selectedCardGradeId, setSelectedCardGradeId] = useState(null);
  const [cardCount, setCardCount] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [adding, setAdding] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [addDetailsOpen, setDetailsAddOpen] = useState(false);
  const [addConfirmOpen, setConfirmAddOpen] = useState(false);
  const [addedId, setAddedId] = useState("");
  const handleAddOpen = useCallback(() =>
    currentUser ? setAddOpen(true) : setLoginOpen(true),
    []);
  const handleOpenLogin = useCallback(() => setLoginOpen(true), []);
  const handleAddClose = useCallback(() => setAddOpen(false), []);
  const handleAddDetailsOpen = useCallback(() => setDetailsAddOpen(true), []);
  const handleAddDetailsClose = useCallback(
    () => [setDetailsAddOpen(false), setConfirmAddOpen(true)],
    []
  );
  const handleAddConfirmOpen = useCallback(() => setConfirmAddOpen(true), []);
  const handleAddConfirmClose = useCallback(() => setConfirmAddOpen(false), []);
  const [addClipOpen, setAddClipOpen] = useState(false);
  const handleAddClipOpen = useCallback(() => setAddClipOpen(true), []);
  const handleAddClipClose = useCallback(() => setAddClipOpen(false), []);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [create] = useMutation(createUserCard, {
    variables: {
      input: {
        cardId,
        isStaged: false,
      },
    },
    refetchQueries: [],
  });

  const { data: { getCard: card } = {} } = useQuery(getCard, {
    variables: {
      id: cardId,
    },
  });

  const { data: { getUserCard: userCard } = {} } = useQuery(getUserCard, {
    variables: {
      id: userCardId,
    },
  });

  const userCardUserId = userCard?.userId ?? "000";

  //getUser of userCard owner
  const { data: { getUser: user } = {} } = useQuery(getUser, {
    skip: !userCardId,
    variables: {
      id: userCardUserId,
    },
  });

  const handlePlayerLinkClick = useCallback(
    () =>
      card.players[0]?.id ? navigate(`/players/${card.players[0]?.id}`) : null,
    [card, navigate]
  );

  const displayPlayerPageLink = card?.players[0]?.id ? true : false;

  const onEditLinkClick = useCallback(() => navigate(`edit`), [navigate]);

  const handleEbayLinkClick = useCallback(
    () => {
      (currentUser ?
        window.open(
          `https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1311&_nkw=${card?.name?.replace?.(
            / /g,
            "+"
          )}+${card?.cardSet?.year}+${card?.cardSet?.name.replace?.(/ /g, "+")}`,
          "_blank"
        )
        :
        setLoginOpen(true)
      )
    },
    [card]
  );

  const handleAddToCollection = useCallback(
    () =>
      Promise.resolve(null)
        .then(() => setAdding(true))
        .then(create)
        .then(handleAddClose())
        .then(({ data: { createUserCard } }) => createUserCard)
        .then(userCard => {
          handleAddDetailsOpen();
          setAddedId(userCard.id);
        })
        .catch(() => window.alert("Something went wrong."))
        .finally(() => setAdding(false)),
    [create, handleAddClose, handleAddDetailsOpen]
  );

  const handleAddDetailsRedirect = useCallback(() => {
    navigate(`/add-cards/${addedId}/details`);
  }, [addedId, navigate]);

  const rawCardGradeId = (card?.cardGrades ?? []).find(
    cg => cg.gradeVendor.name === "Raw"
  )?.id;

  const handleSelectCardGrade = useCallback(
    cardGradeId => setSelectedCardGradeId(cardGradeId ?? rawCardGradeId),
    [setSelectedCardGradeId, rawCardGradeId]
  );

  const handleStartDateChange = useCallback(
    startDate => setStartDate(startDate),
    []
  );

  const gradeVendor =
    userCard?.cardGrade?.gradeVendor?.name ??
    userCard?.boundGrade?.gradeVendor?.name ?? 'Raw';


  const [selectedVendor, setSelectedVendor] = useState(gradeVendor);

  // console.log(gradeVendor)

  const isMine =
    !!userCard && userCard.userId === currentUser?.authenticatable?.id;

  // console.log("rawCardGradeId", rawCardGradeId)
  // console.log("selectedVendor", selectedVendor)

  //userCard profile url link
  const profileUrl = userCard ? "/users/" + userCard.userId : null;

  const redirectTo = '/cards/' + cardId;

  useEffect(() => {
    selectedVendor?.toLocaleLowerCase?.() === "raw"
      ? setSelectedCardGradeId(rawCardGradeId)
      : setSelectedCardGradeId(null);
  }, [selectedVendor, rawCardGradeId]);

  const profileImg =
    user?.approvedProfileImages.length > 0
      ? user?.approvedProfileImages[0]?.imageUrl
      : PlayerImg;

  const onShare = () => {
    const id = userCardId || cardId;
    const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
    if (navigator.share && isMobile) {
      navigator.share({
        title: "Share Card",
        url: url,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      handleAddClipOpen();
    }
  };

  return !card ? null : (
    <CardDetailView
      card={card}
      userCard={userCard}
      currentUser={currentUser}
      handlePlayerLinkClick={handlePlayerLinkClick}
      displayPlayerPageLink={displayPlayerPageLink}
      handleEbayLinkClick={handleEbayLinkClick}
      onEditLinkClick={onEditLinkClick}
      handleAddToCollection={handleAddToCollection}
      setSelectedVendor={setSelectedVendor}
      selectedVendor={selectedVendor}
      handleSelectCardGrade={handleSelectCardGrade}
      selectedCardGradeId={selectedCardGradeId}
      gradeVendor={gradeVendor}
      adding={adding}
      onStartDateChange={handleStartDateChange}
      startDate={startDate}
      isMine={isMine}
      isMobile={isMobile}
      handleAddOpen={handleAddOpen}
      handleAddClose={handleAddClose}
      addOpen={addOpen}
      handleAddDetailsOpen={handleAddDetailsOpen}
      handleAddDetailsClose={handleAddDetailsClose}
      addDetailsOpen={addDetailsOpen}
      handleAddDetailsRedirect={handleAddDetailsRedirect}
      addConfirmOpen={addConfirmOpen}
      handleAddConfirmClose={handleAddConfirmClose}
      addClipOpen={addClipOpen}
      onShare={onShare}
      handleAddClipClose={handleAddClipClose}
      cardCount={cardCount}
      setCardCount={setCardCount}
      profileUrl={profileUrl}
      user={user}
      profileImg={profileImg}
      loginOpen={loginOpen}
      handleLoginClose={() => setLoginOpen(false)}
      redirectTo={redirectTo}
      handleOpenLogin={handleOpenLogin}
    />
  );
};

export default CardDetailContainer;
