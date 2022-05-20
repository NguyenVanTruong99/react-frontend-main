import IconButton from "@mui/material/IconButton";
import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import styles from "./UserCardDetailsNavStyles";

const UserCardDetailsNavView = ({
  userCard,
  userCards,
  onNext,
  onPrevious,
  onQuitClick,
}) => (
  <Grid container spacing={0} sx={styles.gridContainer}>
    <Grid item xs={12} md={6}>
      <Box sx={styles.wrapper}>
        {!!userCard?.userCardImages?.[0] && (
          <Box sx={styles.imgWrapper}>
            <img
              alt="player"
              style={{ width: "auto", height: 48 }}
              src={`${userCard.userCardImages[0].imageUrl}`}
            />
          </Box>
        )}
        <IconButton
          disabled={!onPrevious}
          onClick={onPrevious}
          sx={styles.iconWrapper}
        >
          <KeyboardArrowLeftRoundedIcon />
        </IconButton>
        <IconButton disabled={!onNext} onClick={onNext} sx={styles.iconWrapper}>
          <KeyboardArrowRightRoundedIcon />
        </IconButton>
        <Box sx={styles.textWrapper}>
          <Typography>
            {userCards.findIndex(uc => uc.id === userCard.id) + 1}/
            {userCards.length}:{" "}
            {!userCard?.card
              ? "Card Information not filled in yet"
              : `${userCard.card.name} ${userCard.card.cardSet.year} ${userCard.card.cardSet.name} #${userCard.card.cardNumber}`}
          </Typography>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box sx={styles.buttonWrapper}>
        <Button variant="outlined" onClick={onQuitClick} sx={styles.button}>
          Come back later
        </Button>
      </Box>
    </Grid>
  </Grid>
);

export default UserCardDetailsNavView;
