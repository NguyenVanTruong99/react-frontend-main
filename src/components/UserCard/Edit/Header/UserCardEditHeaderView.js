import { Grid, IconButton, Typography } from "@mui/material";

import { Box } from "@mui/system";
import CardBasicInfo from "components/Card/BasicInfo";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import UserCardDetailSelection from "components/UserCardDetail/Selection";
import UserCardDetailsImageEditor from "components/UserCard/Details/ImageEditor";
import UserCardEditVisibilitySwitch from "../VisibilitySwitch";
import globalStyles from "components/Styles";

const UserCardEditHeaderView = ({ userCard }) => (
  <Grid container spacing={0} sx={{ mt: 2 }}>
    <Grid item xs={12} md={6} lg={6} xl={6}>
      <Box
        sx={{
          px: {
            xs: 2,
            md: 8,
          },
          py: 2,
        }}
      >
        <UserCardEditVisibilitySwitch userCard={userCard} />
        <CardBasicInfo
          cardSetYear={userCard.card.cardSet.year}
          playerFullName={userCard.card.players.map(p => p.fullName)}
          cardSetName={userCard.card.cardSet.name}
          cardNumber={userCard.card.cardNumber}
        />
        <Box sx={{ ...globalStyles.row, ...{ my: 4, alignItems: "center" } }}>
          <Typography variant="addLg">Unique Elements</Typography>
          <IconButton onClick={() => alert("TODO")}>
            <HelpOutlineIcon color="primary" />
          </IconButton>
        </Box>
        <UserCardDetailSelection userCardId={userCard.id} />
      </Box>
    </Grid>
    <Grid item xs={12} md={6} lg={6} xl={6}>
      <Box
        sx={{
          backgroundColor: theme => theme.palette.background.alt,
          // px: 8,
          pt: 4,
          pb: 8,
        }}
      >
        <UserCardDetailsImageEditor userCard={userCard} />
      </Box>
    </Grid>
  </Grid>
);

export default UserCardEditHeaderView;
