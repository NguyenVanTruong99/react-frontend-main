import { Grid } from "@mui/material";
import UserCardDetailSelectionItem from "./Item";

const UserCardDetailSelectionView = ({ userCard, userCardDetails }) => (
  <Grid container spacing={2}>
    {userCardDetails.map(userCardDetail => (
      <UserCardDetailSelectionItem
        key={userCardDetail.id}
        userCardDetail={userCardDetail}
        userCard={userCard}
      />
    ))}
  </Grid>
);

export default UserCardDetailSelectionView;
