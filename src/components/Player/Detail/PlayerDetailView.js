import * as React from "react";

import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import AddCards from "assets/images/add_card.svg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CareerBanner from "assets/images/careerBanner.png";
import DataBox from "components/Data/Box";
import { DateTime } from "luxon";
import DefaultPlayer from "assets/images/playerDefaultImg.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Link } from "react-router-dom";
import LoginModal from "components/LoginModal";
import ModalPrompt from "components/ModalPrompt";
import NoxxBg from "assets/images/backgrounds/Bg4x.png";
import NoxxPattern from "assets/images/backgrounds/noxx-bg-sm.png";
import PlayerCardTable from "../Card/Table/PlayerCardTableContainer";
import PlayerRookieCards from "components/Player/Card/Rookies/PlayerRookieCardsContainer";
import SimilarPlayer from "components/Player/Card/SimilarPlayers/SimilarPlayersContainer";
import styles from "./PlayerDetailStyles";

function playerSubHeading(player) {
  let subHeading = [];
  if (player.team) {
    subHeading.push(`${player.team.location} ${player.team?.nickname}`);
  } else if (player.status === "RET") {
    subHeading.push(`Retired`);
  } else {
    subHeading.push(`Free Agent`);
  }

  if (player.jerseyNumber) {
    subHeading.push(`#${player.jerseyNumber}`);
  }

  if (player.position) {
    subHeading.push(`${player.position.name}`);
  }

  // if (player.height) {
  //   subHeading.push(`${inchesToFeet(player.height)}`);
  // }

  // if (player.birthDate) {
  //   subHeading.push(`${getAge(player.birthDate)} years old`);
  // }

  return subHeading;
}

function quickStats() { }


//function to calculate age in years from date of birth
function getAge(dateOfBirth) {
  var today = new Date();
  var birthDate = new Date(dateOfBirth);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  return age;
}

//function to calculate age in years from date of birth
function formateDate(dateOfBirth) {
  if (dateOfBirth) {
    const date = DateTime.fromFormat(dateOfBirth, "yyyy-MM-dd");
    return date.toFormat("MM/dd/yy");
  }
  return 0;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function inchesToFeet(inches) {
  let feet = Math.floor(inches / 12);
  let inchesRemainder = inches % 12;
  return `${feet}' ${inchesRemainder}"`;
}

function getCountry(cityStateCountry) {
  let country = cityStateCountry.split(",")[2].trim();
  return country;
}

function truncateString(str) {
  if (str.length > 500) {
    return str.substring(0, 500) + "...";
  } else {
    return str;
  }
}

let isFav = false;
const onHeart = () => {
  isFav = !isFav;
  console.log("changed fave to ", isFav);
};

const PlayerDetailView = ({
  player,
  isMobile,
  parsedStats,
  rookieCards,
  cardCount,
  setCardCount,
  bioUrl,
  onShare,
  addClipOpen,
  handleAddClipClose,
  loginOpen,
  handleLoginClose,
  redirectTo,
  addCardsClick
}) => {
  function getPlayerBio(url) {
    return fetch(url)
      .then(response => {
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        return reader.read().then(({ value, done }) => {
          if (done) {
            return "";
          }
          return decoder.decode(value);
        });
      })
      .catch(error => console.log(error));
  }

  const [bio, setBio] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleBioToggle = () => {
    setOpen(!open);
  };

  Promise.resolve(getPlayerBio(bioUrl)).then(data => {
    let bio = data.split('extract":"')[1].split('","')[0];
    bio = bio.replace(/\u[a-f0-9A-F]{4}/g, "");
    bio = bio.replace(/\\n/g, "");
    setBio(bio.split("}}}}")[0].substring(0, bio.length - 6) + ".");
  });

  const sourceUrl = "https://en.wikipedia.org/wiki/" + player?.fullName
  return (
    <>
      <LoginModal open={loginOpen} handleClose={handleLoginClose} redirectTo={redirectTo} />
      <Box sx={styles.playerDetailRoot} id={"playerDetailRoot"}>
        <>
          <img
            src={NoxxBg}
            style={{
              width: "100vw",
              position: "absolute",
              top: (isMobile ? "70px" : "80px"),
              left: 0,
              height: (isMobile ? "250px" : "350px"),
            }}
            alt="headerBg"
          />
          <img
            src={NoxxPattern}
            style={{
              // width: "100vw",
              position: "absolute",
              top: (isMobile ? "70px" : "80px"),
              right: 0,
              height: (isMobile ? "230px" : "350px"),
              zIndex: 3,
            }}
            alt="headerBg"
          />
        </>
        <Box sx={styles.playerDetailRoot.header} id={"playerDetailRoot.header"}>
          {!isMobile &&

            <Box
              sx={styles.playerDetailRoot.header.playerInfo}
              id={"header.playerInfo"}
            >
              <>
                <Typography variant="playerLg">{player.fullName}</Typography>
                <Box sx={{ display: "flex" }}>
                  {playerSubHeading(player).map((header, i) => (
                    <>
                      <Typography key={i} variant="playerSm">
                        {header}
                      </Typography>
                      {i !== playerSubHeading(player).length - 1 && (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography variant="divider" sx={{ px: 1 }}>
                            |
                          </Typography>
                        </Box>
                      )}
                    </>
                  ))}
                </Box>
              </>
              <Box sx={{ width: '70%', pt: 3 }}>
                <Grid container rowSpacing={2} columnSpacing={3}>

                  <Grid item xs={3} md={3} sx={styles.statGridItem}>
                    <Typography variant="playerStatTop">Height</Typography>
                    <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottom">{player.height ? inchesToFeet(player.height) : '--'}</Typography></Box>
                  </Grid>

                  <Grid item xs={3} md={3} sx={styles.statGridItem}>
                    <Typography variant="playerStatTop">Weight</Typography>
                    <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottom">{player.weight ? `${player.weight} lbs` : '--'}</Typography></Box>
                  </Grid>

                  <Grid item xs={3} md={3} sx={styles.statGridItem}>
                    <Typography variant="playerStatTop">Born</Typography>
                    <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottom">{player.birthDate ? formateDate(player.birthDate) : '--'}</Typography></Box>
                  </Grid>

                  <Grid item xs={3} md={3} sx={styles.statGridItem}>
                    <Typography variant="playerStatTop">Birthplace</Typography>
                    <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottom">{player.birthPlace ?? '--'}</Typography></Box>
                  </Grid>

                  {/* <Grid item xs={3} md={3} sx={styles.statGridItem}>
            <Typography variant="playerStatTop">Last Attended</Typography>
            <Box sx={{ height: 26, whiteSpace: "nowrap"}}><Typography variant="playerStatBottom">{player.id[0]}</Typography></Box>
          </Box> */}

                  <Grid item xs={3} md={3} sx={styles.statGridItem}>
                    <Typography variant="playerStatTop">Draft Year</Typography>
                    <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottom">{player.draftYear ?? '--'}</Typography></Box>
                  </Grid>

                  <Grid item xs={3} md={3} sx={styles.statGridItem}>
                    <Typography variant="playerStatTop">{player?.sport?.name === 'Baseball' ? 'Games' : 'Draft Pick'}</Typography>
                    <Box sx={{ height: 26, whiteSpace: "nowrap" }}>
                      <Typography variant="playerStatBottom">{player?.sport?.name === 'Baseball' ? numberWithCommas(player?.experience) : `R${player?.draftRound} (${player?.draftPick})`}</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={3} md={3} sx={styles.statGridItem}>
                    <Typography variant="playerStatTop">Draft Team</Typography>
                    <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottom">{player.draftTeam?.nickname ?? '--'}</Typography></Box>
                  </Grid>

                  <Grid item xs={3} md={3} sx={styles.statGridItem}>
                    <Typography variant="playerStatTop">Rookie Year</Typography>
                    <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottom">{player.rookieYear ? player.rookieYear : '--'}</Typography></Box>
                  </Grid>



                </Grid>
              </Box>
            </Box>
          }
          <Box sx={styles.playerDetailRoot.header.playerImage}>
            {player.headshotUrl ? <img src={player.headshotUrl} alt="" /> : <img src={DefaultPlayer} alt="" />}
          </Box>
          <Box sx={styles.playerDetailRoot.header.shareIconBox}>
            <IconButton
              onClick={onShare}
              sx={styles.playerDetailRoot.header.shareIconBox.shareIcon}
            >
              <IosShareIcon color="grey" />
            </IconButton>
          </Box>
          <Tooltip title="Coming Soon" enterTouchDelay={0}>
            <Box
              sx={styles.playerDetailRoot.header.shareIconBox}
              style={{ top: "100px" }}
            >
              <IconButton
                onClick={onHeart}
                sx={styles.playerDetailRoot.header.shareIconBox.heartIcon}
                style={{ height: "46px", width: "44px", textAlign: "center" }}
              >
                <FavoriteBorderIcon color="white" />
                {/* isFav ? <FavoriteBorderIcon color="white" /> : <FavoriteIcon color="white" />  */}
              </IconButton>
            </Box>
          </Tooltip>
        </Box>

        {isMobile ? (
          <>
            <Box sx={styles.mobileDetail}>
              <Typography variant="playerMd">{player.fullName}</Typography>
              <Box sx={styles.mobileDetail.playerSubHeading}>
                {playerSubHeading(player).map((header, i) => (
                  <>
                    <Typography variant="cardMd" key={i}>{header}</Typography>
                    {i !== playerSubHeading(player).length - 1 && (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="divider"
                          sx={{ px: 1, color: "#000" }}
                        >
                          |
                        </Typography>
                      </Box>
                    )}
                  </>
                ))}
              </Box>
            </Box>
            <Box sx={styles.mobileGrid}>
              <Box px={3} py={2}>

                <Box sx={styles.mobileGridItem}>
                  <Typography variant="playerStatTopMobile">Height</Typography>
                  <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottomMobile">{player.height ? inchesToFeet(player.height) : '--'}</Typography></Box>
                </Box>

                <Box sx={styles.mobileGridItem}>
                  <Typography variant="playerStatTopMobile">Weight</Typography>
                  <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottomMobile">{player.weight ? `${player.weight} lbs` : '--'}</Typography></Box>
                </Box>

                <Box sx={styles.mobileGridItem}>
                  <Typography variant="playerStatTopMobile">Born</Typography>
                  <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottomMobile">{player.birthDate ? formateDate(player.birthDate) : '--'}</Typography></Box>
                </Box>

                <Box sx={styles.mobileGridItem}>
                  <Typography variant="playerStatTopMobile">Birthplace</Typography>
                  <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottomMobile">{player.birthPlace ?? '--'}</Typography></Box>
                </Box>

                <Divider flexItem sx={{ my: 2 }} />
                {/* <Box sx={styles.mobileGridItem}>
            <Typography variant="playerStatTopMobile">Last Attended</Typography>
            <Box sx={{ height: 26, whiteSpace: "nowrap"}}><Typography variant="playerStatBottom">{player.id[0]}</Typography></Box>
          </Box> */}

                <Box sx={styles.mobileGridItem}>
                  <Typography variant="playerStatTopMobile">Draft Year</Typography>
                  <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottomMobile">{player.draftYear ?? '--'}</Typography></Box>
                </Box>

                <Box sx={styles.mobileGridItem}>
                  <Typography variant="playerStatTopMobile">{player?.sport?.name === 'Baseball' ? 'Games' : 'Draft Pick'}</Typography>
                  <Box sx={{ height: 26, whiteSpace: "nowrap" }}>
                    <Typography variant="playerStatBottomMobile">{player?.sport?.name === 'Baseball' ? numberWithCommas(player?.experience) : `R${player?.draftRound} (${player?.draftPick})`}</Typography>
                  </Box>
                </Box>

                <Box sx={styles.mobileGridItem}>
                  <Typography variant="playerStatTopMobile">Draft Team</Typography>
                  <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottomMobile">{player.draftTeam?.nickname ?? '--'}</Typography></Box>
                </Box>

                <Box sx={styles.mobileGridItem}>
                  <Typography variant="playerStatTopMobile">Rookie Year</Typography>
                  <Box sx={{ height: 26, whiteSpace: "nowrap" }}><Typography variant="playerStatBottomMobile">{player.rookieYear ? player.rookieYear : '--'}</Typography></Box>
                </Box>



              </Box>
            </Box>
          </>
        ) : (
          <></>
        )}
        <Box sx={{ maxWidth: 1200, margin: '0 auto', position: 'relative', bottom: { xs: -16, md: 50 } }}>

          {parsedStats ?
            <>
              <Box sx={{ position: 'absolute', zIndex: 4, height: 40 }}>
                <img src={CareerBanner} style={{ position: 'relative', zIndex: 2, height: 40, bottom: 18, left: -6 }} />
              </Box>
              <Box sx={styles.playerDetailRoot.stats}>
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  sx={styles.playerDetailRoot.stats.careerStatsGrid}
                >
                  {parsedStats && (
                    parsedStats.map((stat, i) => (
                      <Grid item key={i} xs={4}>
                        <DataBox
                          label={
                            <Typography variant="cardGreyXl">{stat[0]}</Typography>
                          }
                          value={
                            <Typography variant="statXl">
                              {numberWithCommas(stat[1])}
                            </Typography>
                          }
                          skipDivider={(i === parsedStats.length - 1) || isMobile}
                        />
                      </Grid>
                    ))
                  )}
                </Grid>
              </Box>
            </> :
            <Box sx={{ pt: 8 }}></Box>
          }


          {bio.length > 100 &&
            <Box sx={styles.playerDetailRoot.bio} id={"bio"}>
              <Typography variant="displayName">Bio</Typography>
              <Box pb={2}>
                {open ? (
                  <Typography variant="playerBio">{bio}&nbsp;&nbsp;&nbsp;Source: <a style={{ color: 'inherit' }} href={sourceUrl}>Wikipedia</a></Typography>
                ) : (
                  <Typography variant="playerBio">{truncateString(bio)}</Typography>
                )}
              </Box>
              <Button onClick={handleBioToggle}>
                {open ? (
                  <>
                    <ArrowDropUpIcon /> Show Less{" "}
                  </>
                ) : (
                  <>
                    <ArrowDropDownIcon /> Show More
                  </>
                )}
              </Button>
            </Box>
          }

          {rookieCards &&
            <Box sx={styles.playerDetailRoot.relatedItems} id={"relatedItems"}>
              <Box sx={styles.playerDetailRoot.relatedItems.relatedItemsBox}>
                <Box
                  sx={
                    styles.playerDetailRoot.relatedItems.relatedItemsBox.relatedItem
                  }
                >
                  <Typography variant="displayName" mb={2}>
                    Top Early Cards
                  </Typography>
                  <Box>
                    <PlayerRookieCards cardIds={rookieCards} />
                  </Box>
                </Box>
              </Box>
            </Box>
          }
          {/* 
        <Typography variant="displayName">Last Five Games</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            py: 2,
          }}
        >
          <img src={DemoCard1} alt="Demo Card" />
          <img
            src={DemoCard2}
            alt="Demo Card"
            style={{ marginLeft: "-36px" }}
          />
          <img
            src={DemoCard3}
            alt="Demo Card"
            style={{ marginLeft: "-36px" }}
          />
          <img
            src={DemoCard4}
            alt="Demo Card"
            style={{ marginLeft: "-36px" }}
          />
          <img
            src={DemoCard5}
            alt="Demo Card"
            style={{ marginLeft: "-36px" }}
          />
        </Box>
        */}
        </Box>



      </Box>
      <Box sx={styles.playerCardTable}>
        <PlayerCardTable
          player={player}
          cardCount={cardCount}
          setCardCount={setCardCount}
        />
      </Box>
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
};

export default PlayerDetailView;
