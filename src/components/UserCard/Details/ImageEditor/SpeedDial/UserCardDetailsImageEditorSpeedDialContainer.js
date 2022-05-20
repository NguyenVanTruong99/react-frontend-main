import { useCallback, useState } from "react";
import UserCardDetailsImageEditorSpeedDialView from "./UserCardDetailsImageEditorSpeedDialView";

const UserCardDetailsImageEditorSpeedDialContainer = ({
  userCard,
  view,
  onRotateClick,
  onSave,
  onFrontClick,
  onBackClick,
  userCardImage,
  onUploadClick,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <UserCardDetailsImageEditorSpeedDialView
      userCardImage={userCardImage}
      userCard={userCard}
      onOpen={handleOpen}
      onClose={handleClose}
      open={open}
      onRotateClick={onRotateClick}
      onSave={onSave}
      onFrontClick={onFrontClick}
      onBackClick={onBackClick}
      onUploadClick={onUploadClick}
      view={view}
    />
  );
};

export default UserCardDetailsImageEditorSpeedDialContainer;
