import { Box, Divider, Paper } from "@mui/material";

import Bg from "assets/images/Bg-white-top.png";
import CardValueChart from "components/CardValue/Chart";
import GradingLandscape from "components/GradingLandscape";
import GradingLandscapeNav from "components/GradingLandscape/Nav";
import LoginModal from "components/LoginModal";
import ModalPrompt from "components/ModalPrompt";
import PlayerCardTable from "components/Player/Card/Table";
import UserCardDetailsHeader from "components/UserCard/Details/Header";
import UserCardSummary from "components/UserCard/Summary";

const CardDetailView = ({
  card,
  userCard,
  currentUser,
  handlePlayerLinkClick,
  displayPlayerPageLink,
  handleEbayLinkClick,
  onEditLinkClick,
  handleAddToCollection,
  setSelectedVendor,
  gradeVendor,
  selectedVendor,
  handleSelectCardGrade,
  selectedCardGradeId,
  adding,
  isMine,
  startDate,
  onStartDateChange,
  isMobile,
  handleAddOpen,
  handleAddClose,
  addOpen,
  handleAddDetailsOpen,
  handleAddDetailsClose,
  addDetailsOpen,
  handleAddDetailsRedirect,
  addConfirmOpen,
  handleAddConfirmClose,
  cardCount,
  setCardCount,
  profileUrl,
  user,
  profileImg,
  onShare,
  addClipOpen,
  handleAddClipClose,
  loginOpen,
  handleLoginClose,
  redirectTo,
  handleOpenLogin
}) => (
  <>
    <UserCardDetailsHeader
      details={[
        ...card.details,
        ...[
          card.players.some(player => player.isHof)
            ? { detailName: "Hall of Fame" }
            : null,
        ],
      ].filter(detail => !!detail)}
      userCardId={userCard?.id}
      cardId={card?.id}
      userCardDetails={userCard?.userCardDetails}
      adding={adding}
      cardSetYear={card.cardSet.year}
      currentUser={currentUser}
      playerFullName={card.name}
      cardSetName={`${card.cardSet.name} ${card.cardSet.variety ?? ""}`}
      cardNumber={card.cardNumber}
      viewerUserId={currentUser?.authenticatable?.id}
      grade={userCard?.cardGrade?.grade?.grade ?? userCard?.boundGrade?.grade}
      gradeVendor={
        userCard?.cardGrade?.gradeVendor?.name ??
        userCard?.boundGrade?.gradeVendor?.name
      }
      gradePop={userCard?.cardGrade?.gradePop}
      userCardCertNumber={userCard?.certNumber}
      ownerUserId={userCard?.userId}
      imageSrcs={
        !!userCard?.userCardImages?.length
          ? (userCard?.userCardImages ?? []).map(uci => uci.imageUrl)
          : [card.frontUrl]
      }
      onPlayerLinkClick={handlePlayerLinkClick}
      displayPlayerPageLink={displayPlayerPageLink}
      onEbayLinkClick={handleEbayLinkClick}
      onEditLinkClick={onEditLinkClick}
      // onAddToCollectionClick={handleAddToCollectionClick}
      onAddToCollectionClick={handleAddOpen}
      isMine={isMine}
      isMobile={isMobile}
      editionNumber={userCard?.editionNumber}
      profileUrl={profileUrl}
      user={user}
      profileImg={profileImg}
      onShare={onShare}
      handleOpenLogin={handleOpenLogin}
    // onEditClick={handleEditClick}
    />
    {isMine ? (
      <Box
        sx={{
          my: 3,
          mx: { md: 8, xs: 3 },
          mt: { md: 0, xs: 4 },
          py: 3,
          position: "relative",
          top: { md: "-40px", xs: "0px" },
          background: { sm: `url(${Bg})`, xs: "white" },
          backgroundSize: { sm: "100% 300px", xs: "100%" },
          borderBottom: "1px solid #DFE0EA",
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
        }}
      >
        <UserCardSummary userCardId={userCard.id} isMobile={isMobile} />
      </Box>
    ) : (
      <Box sx={{ height: { md: "24px", xs: "24px" } }} />
    )}
    <Box
      sx={{
        mx: { md: 8, xs: 0 },
        mt: 0,
        borderRadius: "4px",
      }}
    >
      <Box sx={{ border: "1px solid #dfdfde", borderRadius: "4px", mb: 3 }}>
        <GradingLandscapeNav
          selectedVendor={selectedVendor}
          onSelect={setSelectedVendor}
        />
        <Paper>
          {selectedVendor?.toLowerCase?.() !== "raw" && (
            <>
              <Box sx={{ py: 1, display: 'flex', justifyContent: 'center' }}>
                <GradingLandscape
                  selectedVendor={selectedVendor}
                  cardId={card?.id}
                  onSelect={handleSelectCardGrade}
                />
              </Box>
              <Divider sx={{ mx: 3, mb: 3 }} />
            </>
          )}
          {!!selectedCardGradeId && (
            <>
              {/* <CardGradeDataSummary cardGradeId={selectedCardGradeId} startDate={startDate} /> */}
              <CardValueChart
                cardGradeId={selectedCardGradeId}
                onStartDateChange={onStartDateChange}
                start={startDate}
                selectedVendor={selectedVendor}
              />
            </>
          )}
        </Paper>
      </Box>
    </Box>
    <Box mt={6} sx={{}}>
      <PlayerCardTable
        card={card}
        cardCount={cardCount}
        setCardCount={setCardCount}
      />
    </Box>
    <LoginModal open={loginOpen} handleClose={handleLoginClose} redirectTo={redirectTo}/>
    <ModalPrompt
      open={!!addOpen}
      promptMessage="Add this card to your collection?"
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleAddClose}
      handleAction={handleAddToCollection}
    />
    <ModalPrompt
      open={!!addDetailsOpen}
      promptMessage="Add your card's details now?"
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleAddDetailsClose}
      handleAction={handleAddDetailsRedirect}
    />
    <ModalPrompt
      open={!!addConfirmOpen}
      promptMessage="Card successfully added!"
      closeMessage="OK"
      actionMessage="Yes"
      handleClose={handleAddConfirmClose}
      handleAction={null}
    />
    <ModalPrompt
      open={!!addClipOpen}
      promptMessage="URL copied to your clipboard!"
      closeMessage="OK"
      actionMessage="Yes"
      handleClose={handleAddClipClose}
      handleAction={null}
    />
  </>
);

export default CardDetailView;
