import { useCallback, useContext, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { CurrentUserContext } from "contexts/CurrentUser";
import PlayerImg from "assets/images/Player.png";
import ShowcaseCardView from "./ShowcaseCardView";
import { useNavigate } from "react-router-dom";

const ShowcaseCardContainer = ({ showcase, profileView = false, featured }) => {
  const id = showcase.id;
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  // const coverImage = showcase.userCards.find(uc => !!uc.userCardImages.length)
  //   ?.userCardImages?.[0]?.imageUrl ?? showcase.userCards.find(uc => !!uc.card.frontUrl)?.card.frontUrl;
  const coverImage = showcase.coverImageUrl;
  const [addClipOpen, setAddClipOpen] = useState(false);
  const handleAddClipOpen = useCallback(() => setAddClipOpen(true), []);
  const handleAddClipClose = useCallback(() => setAddClipOpen(false), []);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const showcaseUser = showcase.user;

  const showcaseUserImg =
    showcaseUser?.approvedProfileImages.length > 0
      ? showcaseUser?.approvedProfileImages[0]?.imageUrl
      : PlayerImg;

  const handleNavigation = useCallback(
    () => navigate(`/showcases/${id}`),
    [navigate, id]
  );

  const handleShare = e => {
    e.stopPropagation();
    const url = `${window.location.protocol}//${window.location.host}/showcases/${id}`;
    if (navigator.share && isSmall) {
      navigator.share({
        title: "Share Card",
        url: url,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      handleAddClipOpen();
    }
  };

  return (
    <ShowcaseCardView
      showcase={showcase}
      coverImage={coverImage}
      onNavigate={handleNavigation}
      onShare={handleShare}
      currentUser={currentUser}
      showcaseUserImage={showcaseUserImg}
      addClipOpen={addClipOpen}
      handleAddClipClose={handleAddClipClose}
      profileView={profileView}
      featured={featured}
    />
  );
};

export default ShowcaseCardContainer;
