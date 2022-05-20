import { useContext, useState } from "react";
import { CurrentUserContext } from "contexts/CurrentUser";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import Profile from "components/Profile";

const EditProfile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [redirect, setRedirect] = useState(null);

  const userId = currentUser?.authenticatable?.id;

  if (redirect) return <Navigate to={redirect} />;
  if (!userId) setRedirect("/");

  const styles = {
    container: {
      maxWidth: 1440,
      margin: "0 auto",
    },
  };

  return (
    <Box sx={styles.container}>
      {<Profile userId={userId} isCurrentUser={true} isEditing={true} />}
    </Box>
  );
};

export default EditProfile;
