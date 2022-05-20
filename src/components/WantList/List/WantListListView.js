import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";

import EmptyWantlist from "assets/images/EmptyWantlist.png";
import Filter from "assets/svg/icons/Filter.svg";
import NoxxBg from "assets/images/Bg-md-nopattern.png";
import NoxxPattern from "assets/images/backgrounds/noxx-bg-md.png";
import WantListCard from "./WantListCard.js";
import WantlistImg from "assets/images/wantlist.png";
import { alpha } from "@mui/material/styles";

const styles = {
  iconButton: {
    padding: theme => theme.spacing(0.25),
  },
  avatar: {
    border: 1,
    backgroundColor: theme => theme.palette.background.white,
    borderColor: theme => alpha(theme.palette.blue.main, 0.2),
  },
};
const WantListListView = ({
  wantListCards,
  user,
  CurrentUser,
  handleOpenFilterModal,
}) => (
  <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
    <Box
      m={0}
      sx={{
        height: "150px",
        width: "100vw",
        position: "absolute",
        left: 0,
        top: { md: 80, xs: 60 },
        background: `url(${NoxxBg})`,
        backgroundSize: { md: "100% 100%", xs: "cover" },
        backgroundRepeat: "repeat",
      }}
    >
      <img
        src={NoxxPattern}
        alt="Noxx"
        style={{
          width: "70%",
          position: "absolute",
          overflow: "hidden",
          right: 0,
          bottom: 0,
          paddingBottom: "2px",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          zIndex: 3,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={WantlistImg}
          alt="Showcase"
          style={{ height: "30%", position: "relative" }}
        />
      </Box>
    </Box>
    <Box
      sx={{
        marginTop: { xs: "170px", md: "200px" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            mt: 0,
            mb: 2,
            ml: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box mr={2}>
            <Tooltip title="Filter">
              <IconButton
                sx={styles.iconButton}
                onClick={handleOpenFilterModal}
              >
                <Avatar sx={styles.avatar}>
                  <img src={Filter} alt="Filter" />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Typography variant="h5">Wanted</Typography>
          <Typography
            variant="h5"
            sx={{ color: "rgb(160, 147, 103)", ml: "10px" }}
          >
            {wantListCards.length}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: { md: "flex-start", xs: "center" },
          // width: '100%',
          ml: { md: 5, xs: 0 },
        }}
      >
        {wantListCards.map(wantListCard => (
          <WantListCard card={wantListCard} key={wantListCard.id} />
        ))}
        {wantListCards.length < 1 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              py: 8,
              m: 0,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={EmptyWantlist}
              style={{ maxWidth: "100vw", height: 228, margin: -20 }}
              alt="empty"
            />
            <Box
              sx={{
                width: { md: "50%", xs: "100%" },
                textAlign: "center",
                py: 2,
              }}
            >
              <Typography variant="greySm" pb={2}>
                Looking for cards to add to your collection?
              </Typography>
              <Typography variant="greySm" pb={2}>
                Add them to your Want List and the NoXX community might be able
                to help!
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  </Box>
);

export default WantListListView;
