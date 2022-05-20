import { useMediaQuery, useTheme } from "@mui/material";
import ProfileInfoView from "./ProfileInfoView";

const ProfileInfoContainer = ({ showcases, user }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("lg"));
  const numShowcases = showcases?.length;
  return (
    <ProfileInfoView
      isMedium={isMedium}
      numShowcases={numShowcases}
      user={user}
    />
  );
};

export default ProfileInfoContainer;
