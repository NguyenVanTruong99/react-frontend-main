import { useMediaQuery, useTheme } from "@mui/material";

import CollectorsToConnectWithView from "./CollectorsToConnectWithView";
import { listUsers } from "components/User/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const CollectorsToConnectWithContainer = ({
  user,
  collectorIds,
  displayName,
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { error, data: { listUsers: users = [] } = {} } = useQuery(listUsers, {
    variables: {
      userIds: collectorIds,
    },
  });
  !!error && console.error(error);
  const collectors = users?.filter(u => u.username !== user?.username);
  return (
    <CollectorsToConnectWithView
      isMobile={isMobile}
      collectors={collectors}
      displayName={displayName}
    />
  );
};

export default CollectorsToConnectWithContainer;
