import { Box, Button, Typography } from "@mui/material";

import FollowingIcon from "assets/images/icons/following.svg";
import ShowcaseAddButton from "../../Add/Button";
import ShowcaseIcon from "assets/images/icons/showcase_plus.svg";

const ShowcaseListNavView = ({
  view,
  onNavClick,
  theme,
  showcaseLabel,
  showcasesCount,
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { md: "column", xs: "column-reverse" },
    }}
  >
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0px",
        marginTop: { md: "196px", xs: "28px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* <Grid item xs={12} md={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}> */}
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              borderBottom: theme =>
                `4px solid ${
                  view === "following"
                    ? "transparent"
                    : theme.palette.primary.main
                }`,
              mb: 1.5,
              mr: 4,
            }}
          >
            <Button
              color={view === "yours" ? "secondary" : "disabled"}
              // disabled={view === 'yours'}
              startIcon={
                <img
                  src={ShowcaseIcon}
                  style={{ filter: "brightness(0)" }}
                  alt="icon"
                />
              }
              variant="text"
              onClick={onNavClick.bind(null, "yours")}
              sx={{ pb: 1 }}
            >
              Your Showcases
            </Button>
          </Box>
          <Box
            sx={{
              borderBottom: theme =>
                `4px solid ${
                  view === "yours" ? "transparent" : theme.palette.primary.main
                }`,
              mx: 3,
              mb: 1.5,
            }}
          >
            <Button
              color={view === "following" ? "secondary" : "disabled"}
              // disabled={view === 'following'}
              startIcon={<img src={FollowingIcon} alt="icon" />}
              variant="text"
              onClick={onNavClick.bind(null, "following")}
              sx={{ p: 0, py: 1 }}
            >
              Following
            </Button>
          </Box>
        </Box>
        <ShowcaseAddButton />
      </Box>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: view === "yours" ? "column" : "row",
        mt: { xs: "174px", md: "0px" },
      }}
    >
      <Typography variant="h5" sx={{ mt: 0 }}>
        {showcaseLabel}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "rgb(160, 147, 103)",
          ml: view === "yours" ? "0px" : "10px",
        }}
      >
        {showcasesCount}
      </Typography>
    </Box>
  </Box>
);

export default ShowcaseListNavView;
