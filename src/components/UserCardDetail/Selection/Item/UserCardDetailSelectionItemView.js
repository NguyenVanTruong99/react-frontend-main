import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Grid } from "@mui/material";
import Switch from "components/Switch";
import { styled } from "@mui/system";

const UserCardDetailSelectionItemView = ({
  userCardDetail,
  userCard,
  onChange,
}) => (
  <Grid item xs={12} md={6} xl={4}>
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={
              !!(userCard?.userCardDetails ?? []).find(
                ucd => ucd.id === userCardDetail?.id
              )
            }
            onChange={onChange}
          />
        }
        label={userCardDetail.detailName}
      />
    </FormGroup>
  </Grid>
);

export default UserCardDetailSelectionItemView;
