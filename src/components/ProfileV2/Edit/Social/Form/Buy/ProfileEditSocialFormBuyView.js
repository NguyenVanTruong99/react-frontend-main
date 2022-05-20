import { Box, Typography, Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import TextField from "components/Form/TextField";
import style from "./ProfileEditSocialFormBuyStyle";

const ProfileEditSocialFormBuyView = ({
  control,
  errors,
  ebayName,
  myslabsUser,
  whatnotUser,
}) => (
  <Stack direction="column" spacing={2}>
    <Box sx={style.buyTextBox}>
      <Typography variant="body2" sx={style.buyText}>
        Provide members with links to your purchasable cards from the providers
        below
      </Typography>
    </Box>
    <Controller
      name="ebayName"
      control={control}
      defaultValue={ebayName ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label={<Typography variant="placeholder">Ebay</Typography>}
          variant="standard"
          error={!!errors?.ebayName}
          helperText={errors?.ebayName?.message}
          placeholder="Enter your Ebay username"
        />
      )}
    />
    <Controller
      name="myslabsUser"
      control={control}
      defaultValue={myslabsUser ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label={<Typography variant="placeholder">My Slabs</Typography>}
          variant="standard"
          error={!!errors?.myslabsUser}
          helperText={errors?.myslabsUser?.message}
          placeholder="Enter your MySlabs username"
        />
      )}
    />
    <Controller
      name="whatnotUser"
      control={control}
      defaultValue={whatnotUser ?? ""}
      render={({ field }) => (
        <TextField
          {...field}
          sx={style.textInput}
          label={<Typography variant="placeholder">Whatnot</Typography>}
          variant="standard"
          error={!!errors?.whatnotUser}
          helperText={errors?.whatnotUser?.message}
          placeholder="Enter your Whatnot username"
        />
      )}
    />
  </Stack>
);

export default ProfileEditSocialFormBuyView;
