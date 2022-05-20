import { Box, Button } from "@mui/material";
import { getSocialUrl } from "utils/getSocialUrl";

const SocialButtonsView = ({ userProfile }) => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      mb: 6,
    }}
  >
    {!!userProfile?.ebayName && (
      <Button
        sx={{
          mr: 1,
          width: { md: "200px", xs: "100px" },
          lineHeight: { md: 1.75, xs: 1.2 },
        }}
        variant="outlined"
        onClick={e =>
          window.open(getSocialUrl("ebay", userProfile.ebayName), "_blank")
        }
      >
        eBay Listings
      </Button>
    )}
    {!!userProfile?.myslabsUser && (
      <Button
        sx={{
          mr: 1,
          width: { md: "200px", xs: "100px" },
          lineHeight: { md: 1.75, xs: 1.2 },
        }}
        variant="outlined"
        onClick={e =>
          window.open(
            getSocialUrl("myslabs", userProfile.myslabsUser),
            "_blank"
          )
        }
      >
        MySlabs Listings
      </Button>
    )}
    {!!userProfile?.starstockUser && (
      <Button
        sx={{
          mr: 1,
          width: { md: "200px", xs: "100px" },
          lineHeight: { md: 1.75, xs: 1.2 },
        }}
        variant="outlined"
        onClick={e =>
          window.open(
            getSocialUrl("starstock", userProfile.starstockUser),
            "_blank"
          )
        }
      >
        StarStock Listings
      </Button>
    )}
  </Box>
);

export default SocialButtonsView;
