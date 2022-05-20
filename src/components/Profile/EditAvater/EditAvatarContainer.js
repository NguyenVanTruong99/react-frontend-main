import { useRef } from "react";
import { useTheme } from "@emotion/react";
import EditAvatarView from "./EditAvaterView";
import { useContext, useState } from "react";
import { ImageUploaderContext } from "contexts/ImageUploader";
import { useMutation } from "@apollo/client";
import { uploadProfileImage } from "components/User/mutations";
import { getUser } from "components/User/queries";

const EditAvatarContainer = ({ userId }) => {
  const theme = useTheme();
  const cropperRef = useRef({});
  const [isModalOpen, setIsModelOpen] = useState(false);
  const { files, requestUploadDialog, clearFiles } =
    useContext(ImageUploaderContext);
  const selectedImage = !!Array.from(files).length ? files[0] : null;
  const [upload] = useMutation(uploadProfileImage, {
    refetchQueries: [
      {
        query: getUser,
        variables: {
          id: userId,
        },
      },
    ],
  });

  const handleToggleModal = () => {
    setIsModelOpen(prev => !prev);
  };

  const handleUploadRequested = () => {
    requestUploadDialog();
  };

  const handleSaveImage = () => {
    cropperRef.current.save().then(image => {
      upload({
        context: { hasUpload: true },
        variables: {
          image: image,
        },
      })
        .then(handleToggleModal)
        .then(() => cropperRef.current.reset())
        .then(clearFiles)
        .catch(console.error);
    });
  };

  return (
    <EditAvatarView
      crop={{
        unit: "%",
        aspect: 1 / 1,
        width: 150,
      }}
      cropperRef={cropperRef}
      isModalOpen={isModalOpen}
      onSaveImage={handleSaveImage}
      onToggleModal={handleToggleModal}
      onUploadRequested={handleUploadRequested}
      selectedImage={selectedImage}
      theme={theme}
    />
  );
};

export default EditAvatarContainer;
