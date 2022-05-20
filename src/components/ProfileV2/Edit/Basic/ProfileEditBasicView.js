import { Box, Stack, Button, Grid, Divider } from "@mui/material";
import style from "./ProfileEditBasicStyle";
import ProfileBanner from "../../Banner";
import ProfileAvatar from "../../Avatar";
import EditAvatar from "../../Avatar/Edit";
import ProfileEditBasicForm from "./Form";
import EditActions from "../Actions";

const ProfileEditBasicView = ({
  user,
  username,
  bio,
  location,
  control,
  errors,
  isLoading,
  isSaveEnabled,
  onSubmit,
  onClose,
}) => (
  <Box sx={style.editBasicContainer}>
    <Grid container sx={style.editBasicGrid}>
      <Grid item sm={6} xs={12}>
        <Box sx={style.editBasicImagesBox}>
          <Box sx={style.editBasicBannerBox}>
            <ProfileBanner editView={true} user={user} />
          </Box>
          <Box sx={style.editBasicAvatarBox}>
            <ProfileAvatar length={165} user={user} />
            <EditAvatar userId={user.id} />
          </Box>
        </Box>
      </Grid>
      <Divider
        orientation="vertical"
        absolute={true}
        sx={style.editBasicDivider}
      />
      <Grid item sm={6} xs={12}>
        <Box sx={style.editBasicInputsBox}>
          <ProfileEditBasicForm
            user={user}
            username={username}
            bio={bio}
            location={location}
            control={control}
            errors={errors}
            isLoading={isLoading}
            onClose={onClose}
          />
        </Box>
      </Grid>
    </Grid>
    <Divider sx={style.editBasicDividerBottom} />
    <Box sx={style.editBasicActionsBox}>
      <EditActions
        isSaveEnabled={isSaveEnabled}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </Box>
  </Box>
);

export default ProfileEditBasicView;
