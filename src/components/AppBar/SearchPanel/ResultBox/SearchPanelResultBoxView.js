import { Box, List, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import styles from "./SearchPanelResultBoxStyles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { SEARCH_RESULT_TYPES } from "constants/search";
import SearchPanelCardResult from "components/AppBar/SearchPanel/Result/Card";
import SearchPanelPlayerResult from "components/AppBar/SearchPanel/Result/Player";
import SearchPanelUserResult from "components/AppBar/SearchPanel/Result/User";
import SearchPanelUserCardResult from "components/AppBar/SearchPanel/Result/UserCard";

const BlueLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.blue.main,
}));

const SearchPanelResultBoxView = ({
  count,
  handleItemClick,
  handleViewAllClick,
  flexDirection = "column",
  mode = "list",
  items,
  showViewAll,
  style = {},
  theme,
  isMobile,
  title,
  type,
  viewAllLabel,
}) => {
  const navType = type === "InterestUsers" ? "Users" : type;
  return(
    <Box sx={styles.container} style={style}>
      <Box sx={styles.header}>
        <Typography variant="body" sx={styles.title}>
          {title}
        </Typography>
        {showViewAll && (
          <BlueLink
            component="button"
            style={{ textDecoration: "none" }}
            onClick={() => handleViewAllClick(navType)}
          >
            <Box component="span" sx={styles.link}>
              <Typography
                variant="small"
                sx={{ marginRight: theme => theme.spacing(1) }}
              >
                View all {count.toLocaleString()} {viewAllLabel.toLowerCase()}
              </Typography>
              <ArrowRightAltIcon sx={styles.arrow} />
            </Box>
          </BlueLink>
        )}
      </Box>
      {mode === "list" && (
        <List sx={{ ...styles.list, flexDirection }}>
          {items.map((item, idx) => {
            switch (type) {
              case SEARCH_RESULT_TYPES.CARDS:
                return (
                  <SearchPanelCardResult
                    key={idx}
                    {...item}
                    cardFrontImageUrl={item.card?.frontUrl}
                    cardId={item.id}
                    cardName={item.card?.name}
                    cardNumber={item.card?.cardNumber}
                    cardSetName={item.card?.cardSet?.name}
                    cardSetVariety={item.card?.cardSet?.variety}
                    cardSetYear={item.card?.cardSet?.year}
                    handleClick={handleItemClick}
                  />
                );
              case SEARCH_RESULT_TYPES.OTHER_USER_CARDS:
                return (
                  <SearchPanelUserCardResult
                    key={idx}
                    cardFrontImageUrl={
                      item.userCard.userCardImages?.[0]?.imageUrl ||
                      item.userCard.card.frontUrl
                    }
                    cardName={item.userCard.card?.name}
                    cardNumber={item.userCard.card?.cardNumber}
                    cardSetName={item.userCard.card?.cardSet?.name}
                    cardSetVariety={item.userCard.card?.cardSet?.variety}
                    cardSetYear={item.userCard.card?.cardSet?.year}
                    grade={item.userCard.displayGrade?.grade}
                    gradeVendor={item.userCard.displayGrade?.gradeVendor?.name}
                    handleClick={handleItemClick}
                    theme={theme}
                    isMobile={isMobile}
                    user={item.userCard.user}
                    userCardId={item.id}
                    type={type}
                  />
                );
              case SEARCH_RESULT_TYPES.PLAYERS:
                return (
                  <SearchPanelPlayerResult
                    key={idx}
                    handleClick={handleItemClick}
                    playerFullName={item.player?.fullName}
                    playerHeadshotUrl={item.player?.headshotUrl}
                    playerId={item.id}
                    playerStatus={item.player?.status}
                    sportName={item.player?.sport?.name}
                    teamLocation={item.player?.team?.location}
                    teamNickname={item.player?.team?.nickname}
                  />
                );
              case SEARCH_RESULT_TYPES.USERS:
              case SEARCH_RESULT_TYPES.INTEREST_USERS:
                return (
                  <SearchPanelUserResult
                    key={idx}
                    handleClick={handleItemClick}
                    user={item.user}
                    userId={item.id}
                    userLocation={item.user?.profile?.location}
                    userName={item.user?.username}
                  />
                );
              default:
                return null;
            }
          })}
        </List>
      )}
      {mode === "carousel" && (
        // @todo -- we need a carousel library.
        <List
          sx={{ ...styles.list, flexDirection: {sm: "row", xs: "column"}, justifyContent: "space-between" }}
        >
          {items.slice(0, 2).map((item, idx) => {
            switch (type) {
              case SEARCH_RESULT_TYPES.USER_CARDS:
              case SEARCH_RESULT_TYPES.OTHER_USER_CARDS:
                return (
                  <SearchPanelUserCardResult
                    key={idx}
                    cardFrontImageUrl={
                      item.userCard.userCardImages?.[0]?.imageUrl ||
                      item.userCard.card.frontUrl
                    }
                    cardName={item.userCard.card?.name}
                    cardNumber={item.userCard.card?.cardNumber}
                    cardSetName={item.userCard.card?.cardSet?.name}
                    cardSetVariety={item.userCard.card?.cardSet?.variety}
                    cardSetYear={item.userCard.card?.cardSet?.year}
                    grade={item.userCard.displayGrade?.grade}
                    gradeVendor={item.userCard.displayGrade?.gradeVendor?.name}
                    handleClick={handleItemClick}
                    theme={theme}
                    isMobile={isMobile}
                    user={item.userCard.user}
                    userCardId={item.id}
                    type={type}
                  />
                );
              default:
                return null;
            }
          })}
        </List>
      )}
    </Box>);
}

export default SearchPanelResultBoxView;
