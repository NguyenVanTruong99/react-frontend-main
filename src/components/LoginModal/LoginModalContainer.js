import { useContext, useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import { CurrentUserContext } from "contexts/CurrentUser";
import LoginModalView from "./LoginModalView";

const LoginModalContainer = ({ displayLogin = false, open, handleClose, redirectTo }) => {
  const theme = useTheme();
  const { currentUser } = useContext(CurrentUserContext);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selected, setSelected] = useState("sign-in");

  useEffect(() => {
    if (currentUser) {
      handleClose();
    }
  }, [currentUser]);

  return (
    <LoginModalView
      open={open}
      handleClose={handleClose}
      selected={selected}
      setSelected={setSelected}
      redirectTo={redirectTo}
      displayLogin={displayLogin}
    />
  );
};

export default LoginModalContainer;
