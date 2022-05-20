import * as React from "react";
import { Box, Grid } from "@mui/material";

import Card from "@mui/material/Card";
import PlayerBg from "assets/images/backgrounds/player-bg.png";
import PlayerImg from "assets/images/Player.png";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import Typography from "@mui/material/Typography";

import CardImage from "components/Card/Image";
import { gql } from "@apollo/client";
import { DailyPerformersPlayerFragment } from "./__generated__/DailyPerformersPlayerFragment";

// import { useMediaQuery } from '@mui/material';

//function to return icon for sport
const sportIcon = (sport: string): JSX.Element => {
  switch (sport) {
    case "Baseball":
      return <SportsBaseballIcon sx={{ color: "#9FA2B4", height: "20px" }} />;
    case "Basketball":
      return <SportsBasketballIcon sx={{ color: "#9FA2B4", height: "20px" }} />;
    case "Football":
      return <SportsFootballIcon sx={{ color: "#9FA2B4", height: "20px" }} />;
    case "Hockey":
      return <SportsHockeyIcon sx={{ color: "#9FA2B4", height: "20px" }} />;
    default:
      return <></>;
  }
};


interface Props {
  player: DailyPerformersPlayerFragment,
  onClick: () => void,
  stats: any
}

const MdUp = ({ player, onClick, stats }: Props): JSX.Element => 
  <Box
    pb={2}
    mr={1}
    sx={{
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
    onClick={onClick}
  >
    <Card
      variant="outlined"
      sx={{
        borderTopLeftRadius: "10px",
        transition: "0.3s",
        width: { sm: "200px", xs: "260px" },
        "&:hover": {
          cursor: "pointer",
          boxShadow:
            "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        },
      }}
    >
      <Box
        sx={{
          height: { sm: "175px", xs: "250px" },
          width: "100%",
          overflow: "hidden",
          margin: "0",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid #9fa2b4",
          alignItems: "center",
          background: `url(${PlayerBg})`,
          backgroundSize: "100% 100%",
        }}
      >
        <CardImage
          style={{
            width: "auto",
            height: "auto",
            maxHeight: "100%",
            position: "relative",
            fit: "fill",
          }}
          src={player?.headshotUrl}
          Placeholder={PlayerImg}
          alt="profile img"
        />
      </Box>
      <Box sx={{ height: { sm: "140px" }, p: 1 }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography variant={"cardLg" as any}>{player?.fullName}</Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant={"cardGreyMd" as any} align="left">
              {player?.team?.nickname} - {player?.position?.name}
            </Typography>
            {sportIcon(player?.position?.sport?.name)}
          </Box>
          <Box
            px={1}
            pt={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              height: "64px",
            }}
          >
            {
              Object.keys(stats).map((key, index) =>
                <Box
                  key={index}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography variant={"cardGreyMd" as any}>
                    {key.toUpperCase()}
                  </Typography>
                  <Typography variant={"xsmd" as any}>
                    {stats[key] ?? "-"}
                  </Typography>
                </Box>
              )
            }
          </Box>
        </Box>
      </Box>
    </Card>
  </Box>

const SmDown = ({ player, onClick, stats }: Props): JSX.Element => 
  <Box
    pb={2}
    mr={1}
    sx={{
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
    onClick={onClick}
  >
    <Card
      variant="outlined"
      sx={{
        borderTopLeftRadius: "10px",
        transition: "0.3s",
        width: "90vw",
      }}
    >
      <Grid container>
        <Grid item xs={3}>
          <Box
            sx={{
              height: 80,
              width: "100%",
              overflow: "hidden",
              margin: "0",
              background: `url(${PlayerBg})`,
              backgroundSize: "100% 100%",
            }}
          >
            <CardImage
              style={{
                width: "auto",
                height: "auto",
                maxHeight: "100%",
                position: "relative",
                fit: "fill",
              }}
              Placeholder={PlayerImg}
              src={player?.headshotUrl}
              alt="profile img"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          px={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "80px",
            py: 0,
          }}
        >
          <Typography
            variant={"cardLg" as any}
            align="left"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {player?.fullName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "40px",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Typography
              variant={"cardGreySm" as any}
              align="left"
              sx={{ width: "110px" }}
            >
              {player?.team?.nickname} - {player?.position?.name}
            </Typography>
            {player?.position?.sport?.name === "Basketball" && (
              <SportsBasketballIcon
                sx={{ color: "#9FA2B4", height: "20px" }}
              />
            )}
            {player?.position?.sport?.name === "Football" && (
              <SportsFootballIcon
                sx={{ color: "#9FA2B4", height: "20px" }}
              />
            )}
            {player?.position?.sport?.name === "Hockey" && (
              <SportsHockeyIcon sx={{ color: "#9FA2B4", height: "20px" }} />
            )}
            <Box
              px={1}
              pt={"8px"}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              {
                Object.keys(stats).map((key, index) =>
                  <Box
                    key={index}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography variant={"cardGreySm" as any}>
                      {key.toUpperCase()}
                    </Typography>
                    <Typography variant={"xsmd" as any}>
                      {stats[key] ?? "-"}
                    </Typography>
                  </Box>
                )
              }
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  </Box>

const DailyPerformersPlayerView = ({ player, onClick, stats }: Props): JSX.Element => 
  <>
    <Box 
      sx={{
        display: {
          xs: "block",
          md: "none"
        }
      }}
    >
      <SmDown onClick={onClick} player={player} stats={stats} />
    </Box>
    <Box 
      sx={{
        display: {
          xs: "none",
          md: "block"
        }
      }}
    >
      <MdUp onClick={onClick} player={player} stats={stats} />
    </Box>
  </>
  

export const dailyPerformersPlayerFragment = gql`
  fragment DailyPerformersPlayerFragment on Player {
    headshotUrl
    fullName
    team {
      nickname
    }
    position {
      name
      sport {
        name
      }
    }
  }
`;

export default DailyPerformersPlayerView;
