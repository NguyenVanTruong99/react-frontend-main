import { Grid } from "@mui/material";
import DataBox from "components/Data/Box";
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";

const UserDataSummaryView = ({ user }) => (
  <Grid container spacing={0}>
    <Grid item xs={12} md={3}>
      <DataBox
        label="Collection value"
        value={formatNumberAsCurrency(user?.collectionValue)}
      />
    </Grid>
    <Grid item xs={12} md={3}>
      <DataBox
        label="Investment"
        value={formatNumberAsCurrency(user?.investment)}
      />
    </Grid>
    <Grid item xs={12} md={3}>
      <DataBox
        label="Profit / Loss"
        value={
          (!!user?.collectionValue || !!user?.investment) &&
          formatNumberAsCurrency(
            (user?.collectionValue ?? 0) - (user?.investment ?? 0)
          )
        }
      />
    </Grid>
    <Grid item xs={12} md={3}>
      <DataBox label="Collection size" value={user?.cardCount} />
    </Grid>
  </Grid>
);

export default UserDataSummaryView;
