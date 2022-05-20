import { useQuery } from "@apollo/client";

import NewToNoxxView from "./NewToNoxxView";
import { listUserCards } from "components/UserCard/queries";
import { Box } from "@mui/material";

const NewToNoxxContainer = ({ user, userCardIds, displayName, isMobile }) => {
  const { loading, data: userCardData } = useQuery(listUserCards, {
    variables: {
      userCardIds: userCardIds,
    },
  });

  return !!loading ? (
    <Box>Loading...</Box>
  ) : (
    <NewToNoxxView
      isMobile={isMobile}
      userCards={userCardData?.listUserCards?.filter(uc => !!uc.card)}
      displayName={displayName}
    />
  );
};

export default NewToNoxxContainer;
