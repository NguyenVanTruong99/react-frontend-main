import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import styles from "./BasicDetailStyles";
import { ReactComponent as PlaceholderCard } from "assets/svg/placeholders/Card.svg";
import Checkmark from "assets/images/icons/checkmark.svg";

const BasicDetailView = ({
  imageOnly,
  cardSetYear,
  cardName,
  cardSetName,
  cardSetVariety,
  cardNumber,
  cardFrontImageUrl = null,
  userHasCard,
  sx = {},
}) => (
  <Box component="span" sx={styles.cardContainer}>
    <Box
      component="span"
      sx={{
        ...styles.cardContent,
        ...{ marginRight: imageOnly ? 0 : theme => theme.spacing(2) },
      }}
    >
      {cardFrontImageUrl ? (
        <Box component="span" sx={styles.cardImage}>
          <img
            style={{ maxWidth: "100%" }}
            src={cardFrontImageUrl}
            alt={cardName}
          />
          {userHasCard && (
            <img src={Checkmark} alt="" style={styles.checkmarkImage} />
          )}
        </Box>
      ) : (
        <Box component="span" style={styles.cardImage}>
          <PlaceholderCard style={{ maxWidth: "100%" }} />
        </Box>
      )}
    </Box>
    {!imageOnly && (
      <Box component="span" sx={sx.detailBox}>
        <Typography sx={styles.cardTextMuted}>{cardSetYear}</Typography>
        <Typography sx={styles.cardTextBold}>{cardName}</Typography>
        <Typography sx={styles.cardText}>
          {cardSetName} {cardSetVariety}
        </Typography>
        {cardNumber && (
          <Typography sx={styles.cardTextMuted}>#{cardNumber}</Typography>
        )}
      </Box>
    )}
  </Box>
);

export default BasicDetailView;
