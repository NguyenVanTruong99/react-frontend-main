import React, { useContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import { Box } from "@mui/system";
import { CurrentUserContext } from "contexts/CurrentUser";
import EntryPage from "components/EntryPage";
import MobileEntryPage from "components/MobileEntryPage";
import { getUser } from "components/User/queries";
import { useQuery } from "@apollo/client";

const Home = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const userId = currentUser?.authenticatable.id;
  const { error, data: { getUser: user } = {} } = useQuery(getUser, {
    skip: !userId,
    variables: {
      id: userId,
    },
  });

  !!error && console.error(error);

  const styles = {
    container: {
      margin: theme.spacing(2),
      padding: theme.spacing(4),
      textAlign: "center",
      mobile: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
      },
    },
    section: {
      margin: theme.spacing(2),
      border: "1px solid",
      borderColor: theme.palette.grey.B200,
    },
  };

  return !isMobile ?  
    <Box style={styles.container}>
      <EntryPage currentUser={currentUser} user={user} />
    </Box>
  :
    <Box sx={styles.container.mobile}>
      <MobileEntryPage currentUser={currentUser} user={user} />
    </Box>
}

export default Home;
