import { Box } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import globalStyles from "components/Styles";
import styles from "./CardBasicInfoStyles";

const CardBasicInfoView = ({
  cardSetYear,
  playerFullName,
  cardSetName,
  cardNumber,
  onPlayerLinkClick,
  displayPlayerPageLink,
  editionSize,
  HOF,
}) => (
  <Box
    sx={{
      pt: {
        md: 3,
        xs: 8,
        cursor: displayPlayerPageLink ? "pointer" : "default",
      },
    }}
    onClick={onPlayerLinkClick}
  >
    <Typography variant="cardDetailSm">{cardSetYear}</Typography>
    <Box
      sx={{
        ...globalStyles.row,
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant={playerFullName.length < 14 ? "cardDetailLg" : "cardDetailMdLg"}
        sx={{ maxWidth: "80%" }}
      >
        {playerFullName}
      </Typography>

      {HOF && (
        <Box sx={{ ml: 1, position: "relative", left: { md: 0, xs: "-0" } }}>
          <Tooltip
            disableFocusListener
            enterTouchDelay={0}
            placement="top-end"
            title="Hall of Fame"
          >
            <img
              style={{ height: "36px" }}
              src={require(`assets/images/attributes/hall-of-fame.png`)}
              alt="HOF"
            />
          </Tooltip>
        </Box>
      )}
    </Box>
    <Box sx={styles.row}>
      <Typography variant="cardDetailMd">{cardSetName}</Typography>
      <Typography variant="cardDetailSmGrey">
        #{cardNumber}
        {editionSize && <span>&nbsp;/{editionSize}</span>}
      </Typography>
    </Box>
  </Box>
);

export default CardBasicInfoView;
