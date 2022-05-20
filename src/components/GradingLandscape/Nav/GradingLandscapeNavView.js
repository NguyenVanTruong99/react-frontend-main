import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import GradeBadge from "components/Grade/Badge";

const GradingLandscapeNavView = ({ selected = "Raw", onSelect, theme }) => (
  <Grid
    container
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: 2,
      py: 3,
      backgroundColor: theme.palette.background.paper,
      borderRadius: "4px 4px 0 0",
    }}
  >
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        display: "flex",
        alignItems: "center",
        pb: { md: 0, xs: 2 },
        justifyContent: { md: "flex-start", xs: "center" },
      }}
    >
      <Typography variant="cardDetailSm">Card Performance</Typography>
    </Grid>
    <Grid item xs={12} md={8}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "flex-end", xs: "center" },
        }}
      >
        <Box
          sx={{
            mx: 1,
            borderRadius: theme => theme.shape.borderRadius / 2,
            cursor: "pointer",
            "&:hover": { cursor: "pointer", transform: "scale(1.3)" },
            border: theme =>
              `2px solid ${
                selected === "Raw"
                  ? theme.palette.background.blue
                  : "transparent"
              }`,
          }}
          onClick={onSelect("Raw")}
        >
          <GradeBadge
            gradeVendor={"RAW"}
            width="40px"
            height="40px"
            color={theme.palette.badges.raw}
            textColor={theme.palette.common.black}
          />
        </Box>
        <Box
          sx={{
            mx: 1,
            borderRadius: theme => theme.shape.borderRadius / 2,
            cursor: "pointer",
            "&:hover": { cursor: "pointer", transform: "scale(1.3)" },
            border: theme =>
              `2px solid ${
                selected === "PSA"
                  ? theme.palette.background.blue
                  : "transparent"
              }`,
          }}
          onClick={onSelect("PSA")}
        >
          <GradeBadge
            gradeVendor={"PSA"}
            width="40px"
            height="40px"
            color={theme.palette.badges.psa}
          />
        </Box>
        <Box
          sx={{
            mx: 1,
            borderRadius: theme => theme.shape.borderRadius / 2,
            cursor: "pointer",
            "&:hover": { cursor: "pointer", transform: "scale(1.3)" },
            border: theme =>
              `2px solid ${
                selected === "BGS"
                  ? theme.palette.background.blue
                  : "transparent"
              }`,
          }}
          onClick={onSelect("BGS")}
        >
          <GradeBadge
            gradeVendor={"BGS"}
            width="40px"
            height="40px"
            color={theme.palette.badges.bgs}
          />
        </Box>
        <Box
          sx={{
            mx: 1,
            borderRadius: theme => theme.shape.borderRadius / 2,
            cursor: "pointer",
            "&:hover": { cursor: "pointer", transform: "scale(1.3)" },
            border: theme =>
              `2px solid ${
                selected === "SGC"
                  ? theme.palette.background.blue
                  : "transparent"
              }`,
          }}
          onClick={onSelect("SGC")}
        >
          <GradeBadge
            gradeVendor={"SGC"}
            width="40px"
            height="40px"
            color={theme.palette.badges.sgc}
          />
        </Box>
      </Box>
    </Grid>
  </Grid>
);

export default GradingLandscapeNavView;
