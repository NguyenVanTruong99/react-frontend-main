import { Box, Grid, Link, Typography } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import NoxxBg from "assets/images/noxx-pattern.png";
import NoxxPattern from "assets/images/noxx-pattern.png";
// import SquareNotch from 'assets/images/HOF.png';
import styles from "./IdentityBarStyles";

//TODO fix rounding

function addCommas(x) {
  if (!!x) {
    return x
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else return "0";
}
function formatAsCurrency(x) {
  if (x < 0) {
    return "-$" + addCommas(Math.abs(x));
  } else {
    return "$" + addCommas(x);
  }
}

function profitOrLoss(userIdentityDetails) {
  let diff = userIdentityDetails.compValue - userIdentityDetails.investment;
  let val = formatAsCurrency(diff);
  if (diff < 0) {
    return <Box sx={styles.box.lower.red}>{val}</Box>;
  } else if (diff > 0) {
    return <Box sx={styles.box.lower.green}>{val}</Box>;
  } else {
    return <Box sx={styles.box.lower.black}>$0</Box>;
  }
}

const IdentityBarView = ({ userIdentityDetails, isMobile,  onClick}) => {
  if (!isMobile) {
    if (userIdentityDetails.cards > 0) {
      return (
        <>
          <Grid container sx={styles.container}>
            <Grid item sm={2} md={2} sx={styles.box.boxes.left}>
              <Link
                sx={{ height: "100%", width: "100%" }}
                href="/my-collection"
              >
                <Box sx={styles.box.left}>
                  <Box style={{ position: "absolute" }}>
                    <Box
                      sx={{
                        fontSize: "0.85em",
                        color: "white",
                        fontWeight: 700,
                      }}
                    >
                      My Collection
                    </Box>
                    <Box sx={styles.box.lower.white}>
                      {addCommas(userIdentityDetails.cards)} Cards
                    </Box>
                  </Box>
                  <img
                    src={NoxxBg}
                    alt="Noxx"
                    style={{
                      width: "110%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item sm={2} md={2} sx={styles.box.right}>
              <Box sx={styles.box.textSmall}>Collection Value</Box>
              <Box sx={styles.box.lower.black}>
                {formatAsCurrency(userIdentityDetails.compValue)}
              </Box>
            </Grid>
            <Grid item sm={2} md={2} sx={styles.box.right}>
              <Box sx={styles.box.textSmall}>Investment</Box>
              <Box sx={styles.box.lower.black}>
                {formatAsCurrency(userIdentityDetails.investment)}
              </Box>
            </Grid>
            <Grid item sm={2} md={2} sx={styles.box.right}>
              <Box sx={styles.box.textSmall}>Profit/Loss</Box>
              {profitOrLoss(userIdentityDetails)}
            </Grid>
            <Grid item sm={2} md={2} sx={styles.box.right}>
              <Box sx={styles.box.textSmall}>Collector Status</Box>
              <Box sx={styles.box.lower.green}>Coming Soon</Box>
              {/* <Box sx={styles.box.lower.black}>
                <img src={SquareNotch} alt="noxx" style={{ height: '24px', margin: '4px' }} />
              </Box> */}
            </Grid>
            <Grid item sm={2} md={2} sx={styles.box.right}>
              <Box sx={styles.box.textSmall}>NoXX Tokens</Box>
              <Box sx={styles.box.lower.green}>Coming Soon</Box>
            </Grid>
          </Grid>
        </>
      );
    } else {
      return <></>;
    }
  } else if (userIdentityDetails.cards === 0) {
    return (
      <>
        <Grid container sx={styles.container}>
          <Grid item xs={12} sx={styles.box.boxes.mobile.left.nocards}>
            <Link sx={{ height: "100%", width: "100%" }} href="/my-collection">
              <Box sx={styles.box.mobile.left}>
                <Box style={{ position: "absolute" }}>
                  <Box sx={styles.box.textSmall}>My Collection</Box>
                  <Box
                    sx={styles.box.lower.white}
                    onClick={onClick}
                  >
                    Add Cards to Get Started <ArrowRightAltIcon />
                  </Box>
                </Box>
                <img src={NoxxPattern} alt="Noxx" style={{ width: "100%" }} />
              </Box>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid container sx={styles.container}>
          <Grid item xs={12} sx={styles.box.boxes.mobile.left}>
            <Box sx={styles.box.mobile.left}>
              <Box style={{ position: "absolute" }}>
                <Typography variant="cardWhiteMd">My Collection</Typography>
                <Box sx={styles.box.lower.white}>
                  {addCommas(userIdentityDetails.cards)} Cards{" "}
                  <ArrowRightAltIcon />
                </Box>
              </Box>
              <img src={NoxxPattern} alt="Noxx" style={{ width: "100%" }} />
            </Box>
          </Grid>
          <Grid item xs={6} sx={styles.box.mobile.right}>
            <Box sx={styles.box.textSmall}>Collection Value</Box>
            <Box sx={styles.box.lower.black}>
              {formatAsCurrency(userIdentityDetails.compValue)}
            </Box>
          </Grid>
          <Grid item xs={6} sx={styles.box.mobile.right}>
            <Box sx={styles.box.textSmall}>Investment</Box>
            <Box sx={styles.box.lower.black}>
              {formatAsCurrency(userIdentityDetails.investment)}
            </Box>
          </Grid>
          <Grid item xs={6} sx={styles.box.mobile.right}>
            <Box sx={styles.box.textSmall}>Profit/Loss</Box>
            {profitOrLoss(userIdentityDetails)}
          </Grid>
          <Grid item xs={6} sx={styles.box.mobile.right}>
            <Box sx={styles.box.textSmall}>Collector Status</Box>
            <Box sx={styles.box.lower.green}>Coming Soon</Box>
            {/* <Box sx={styles.box.lower.black}>
              <img src={SquareNotch} alt="noxx" style={{ height: '24px', margin: '4px' }} />
            </Box> */}
          </Grid>
          <Grid item xs={12} sx={styles.box.mobile.right}>
            <Box sx={styles.box.textSmall}>NoXX Tokens</Box>
            <Box sx={styles.box.lower.green}>Coming Soon</Box>
          </Grid>
        </Grid>
      </>
    );
  }
};
export default IdentityBarView;
