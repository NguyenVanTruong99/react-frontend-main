import { Box, ListItem, ListItemButton } from "@mui/material";
import CardBasicDetail from "components/Card/BasicDetail";
import GradeBadge from "components/Grade/Badge";
import styles from "./SearchPanelUserCardResultStyles";
// import PlayerImg from "assets/images/Player.png";
// import OutlineNotch from "assets/images/notches/small.png";
import UserAvatar from "components/UserAvatar";

const SearchPanelUserCardResultView = ({
  cardFrontImageUrl,
  cardName,
  cardNumber,
  cardSetName,
  cardSetVariety,
  cardSetYear,
  grade,
  gradeVendor,
  handleClick,
  onSelect,
  theme,
  isMobile,
  user,
  userCardId,
  type,
}) => {
  
  // const collectorImageUrl = user?.approvedProfileImages?.length > 0 ? user?.approvedProfileImages[0]?.imageUrl : PlayerImg;
  return (
  <ListItem sx={type==="UserCards" && !isMobile ? styles.container : styles.containerMobile}>
    <ListItemButton
      sx={styles.button}
      component="a"
      onClick={
        !!onSelect
          ? onSelect.bind(null, userCardId)
          : e => handleClick(e, `/collectors-cards/${userCardId}`)
      }
    >
      <CardBasicDetail
        cardFrontImageUrl={cardFrontImageUrl}
        cardName={cardName}
        cardNumber={cardNumber}
        cardSetName={cardSetName}
        cardSetVariety={cardSetVariety}
        cardSetYear={cardSetYear}
        sx={{ detailBox: {maxWidth: '140px'}}}
      />
    </ListItemButton>
    {
      type === "UserCards" ?
        <Box sx={!isMobile ? styles.badge : styles.badgeMobile}>
          <GradeBadge
            grade={grade}
            gradeVendor={gradeVendor}
            width={type==="UserCards" && !isMobile ? "40px" : "45px"}
            height={type==="UserCards" && !isMobile ? "40px" : "45px"}
          />
        </Box>
        :
        <ListItemButton
          sx={styles.profileButton}
          component="a"
          onClick={
            !!onSelect
              ? onSelect.bind(null, userCardId)
              : e => handleClick(e, `/users/${user.id}`)
          }
        >
          {/* <Box sx={{ height: "60px", width: "60px", minWidth: "60px", overflow: "hidden", margin: "0", position: "relative" }}>
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
                collectorImageUrl
              }
              style={{
                position: "relative",
                height: "44px",
                width: "44px",
                objectFit: "cover",
                zIndex: 1,
                margin: "auto",
                left: "9px",
                top: "-59.5px"
              }}
              alt="profile img"
              />
          </Box> */}
          <UserAvatar length={"60px"} user={user}/>
        </ListItemButton>
      }
  </ListItem>
)};

export default SearchPanelUserCardResultView;
