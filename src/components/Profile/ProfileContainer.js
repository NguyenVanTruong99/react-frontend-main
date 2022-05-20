import { useCallback, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import ModalPrompt from "components/ModalPrompt";
import ProfileView from "./ProfileView";

const ProfileContainer = ({ userId, isCurrentUser, isEditing }) => {
  const [hasCards, setHasCards] = useState();
  const [addClipOpen, setAddClipOpen] = useState(false);
  const handleAddClipOpen = useCallback(() => setAddClipOpen(true), []);
  const handleAddClipClose = useCallback(() => setAddClipOpen(false), []);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const handleResults = useCallback(
    resultCount => setHasCards(resultCount > 0),
    [setHasCards]
  );
  const onShare = () => {
    const url = `${window.location.protocol}//${window.location.host}/users/${userId}`;
    if (navigator.share && isSmall) {
      navigator
        .share({
          title: "Share Card",
          url: url,
        })
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      handleAddClipOpen();
    }
  }

  const isSkee = userId === '340afab7-ccf9-468e-a322-2c5a6e7b6372'
  const isBcg = userId === 'c54e3d45-b9d9-4d6e-95af-594f149e25ca'

  return (
    <>
      <ProfileView
        isCurrentUser={isCurrentUser}
        isEditing={isEditing}
        userId={userId}
        handleResults={handleResults}
        onShare={onShare}
        isSkee={isSkee}
        isBcg={isBcg}
        />
      <ModalPrompt
        open={!!addClipOpen}
        promptMessage="URL copied to your clipboard!"
        closeMessage="OK"
        actionMessage="Yes"
        handleClose={handleAddClipClose}
        handleAction={null}
      />
    </>
  );
};

export default ProfileContainer;
