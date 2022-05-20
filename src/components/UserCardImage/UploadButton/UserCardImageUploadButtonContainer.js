import { ImageUploaderContext } from "contexts/ImageUploader";
import useUserCardImageUpdater from "hooks/useUserCardImageUpdater";
import { useContext, useEffect } from "react";
import UserCardImageUploadButtonView from "./UserCardImageUploadButtonView";

const UserCardImageUploadButtonContainer = ({
  userCardId,
  currentUserCardImageId,
  view,
  disabled,
}) => {
  const { files, setMultiple, requestUploadDialog, clearFiles } =
    useContext(ImageUploaderContext);
  const updateImage = useUserCardImageUpdater({
    userCardImageId: currentUserCardImageId,
    view,
    userCardId,
  });

  useEffect(() => {
    !!Array.from(files).length && updateImage(files).then(clearFiles);
  }, [files, clearFiles, updateImage]);

  useEffect(() => {
    setMultiple(false);
  }, [setMultiple]);

  return (
    <UserCardImageUploadButtonView
      onClick={requestUploadDialog}
      disabled={disabled}
    />
  );
};

export default UserCardImageUploadButtonContainer;
