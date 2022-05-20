import {
  listShowcasesByUserId,
  listShowcasesIFollow,
} from "components/UserCollection/queries";
import { useCallback, useEffect, useState } from "react";

import { CurrentUserContext } from "contexts/CurrentUser";
import ShowcaseListView from "./ShowcaseListView";
import { getUser } from "components/User/queries";
import { useContext } from "react";
import { useQuery } from "@apollo/client";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useLocation, useNavigate } from "react-router-dom";

const ShowcaseListContainer = ({
  userId,
  skipHeader,
  numberToShow,
  onFetchShowcases,
  view,
}) => {
  const navigate = useNavigate();
  // const { error, data: {listMyShowcases: myShowcases = [] } = {}} = useQuery(listMyShowcases, {skip: view !== 'yours'});
  const { error, data: { listShowcasesByUserId: myShowcases = [] } = {} } =
    useQuery(listShowcasesByUserId, {
      skip: view !== "yours",
      variables: {
        userId,
      },
    });

  const { currentUser } = useContext(CurrentUserContext);
  const currentUserOwner = currentUser?.authenticatable?.id === userId;
  const { data: { listShowcasesIFollow: showcasesIFollow = [] } = {} } =
    useQuery(listShowcasesIFollow, { skip: view !== "following" });
  const { width: windowWidth } = useWindowDimensions();
  const { error: userError, data: { getUser: user } = {} } = useQuery(getUser, {
    variables: {
      id: userId,
    },
  });
  const location = useLocation();

  const handleNavClick = useCallback(
    view =>
      navigate(view === "following" ? "/following-showcases" : "/my-showcases"),
    [navigate]
  );

  const showcaseLabel = view === "yours" ? "Public Showcases" : "Following";
  const addShowcaseLabel =
    view === "yours" ? "Add a Showcase" : "Follow a Showcase";
  const addShowcaseDesc =
    view === "yours"
      ? "Share your Showcases with collectors and followers."
      : "Follow showcases to discover other collectors' cards.";

  useEffect(() => {
    !!onFetchShowcases && onFetchShowcases(myShowcases);
  }, [onFetchShowcases, myShowcases]);

  !!error && console.error(error);
  !!userError && console.error(userError);

  return !user ? null : (
    <ShowcaseListView
      showcaseLabel={showcaseLabel}
      addShowcaseLabel={addShowcaseLabel}
      addShowcaseDesc={addShowcaseDesc}
      showcases={view === "yours" ? myShowcases : showcasesIFollow}
      windowWidth={windowWidth}
      user={user}
      onNavClick={handleNavClick}
      view={view}
      skipHeader={skipHeader}
      numberToShow={numberToShow}
      currentUserOwner={currentUserOwner}
      location={location}
    />
  );
};

export default ShowcaseListContainer;
