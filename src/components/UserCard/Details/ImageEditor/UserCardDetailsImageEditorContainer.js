import { useCallback, useContext, useEffect, useRef, useState } from "react";

import { ImageUploaderContext } from "contexts/ImageUploader";
import UserCardDetailsImageEditorView from "./UserCardDetailsImageEditorView";
import useUserCardImageUpdater from "hooks/useUserCardImageUpdater";

const rotateNext = {
  0: 90,
  90: 180,
  180: 270,
  270: 0,
};

const UserCardDetailsImageEditorContainer = ({ userCard, type }) => {
  const cropperRef = useRef({});
  const [view, setView] = useState("front");
  const [loading, setLoading] = useState(false);
  const [userCardImage, setUserCardImage] = useState();
  const updateImage = useUserCardImageUpdater({
    userCardImageId: userCardImage?.id,
    view,
    userCardId: userCard?.id,
  });
  const [degreesRotated, setDegreesRotated] = useState(0);
  const { files, setMultiple, requestUploadDialog, clearFiles } =
    useContext(ImageUploaderContext);
  const [dimensions, setDimensions] = useState(null);

  const handleFrontClick = useCallback(() => setView("front"), []);

  const handleBackClick = useCallback(() => setView("back"), []);

  const handleSave = useCallback(
    () =>
      cropperRef.current
        .save()
        .then(setLoading(true))
        .then(file => updateImage([file]))
        .finally(() => setLoading(false)),
    // .then(() => cropperRef.current.reset())
    // .then(() => setDegreesRotated(0))
    // .then(() => cropperRef.current.rotate(0))
    [cropperRef, updateImage, setDegreesRotated]
  );

  const handleRotateClick = useCallback(() => {
    const nextDegrees = rotateNext[degreesRotated.toString()];
    setDegreesRotated(nextDegrees);
    cropperRef.current.rotate(90);
    // setTimeout(() => [cropperRef.current.updateImage(), setDegreesRotated(0), cropperRef.current.rotate(0), cropperRef.current.reset()], 100)

    // setTimeout(handleSave, 3000)
    // handleSave()
  }, [cropperRef, setDegreesRotated, degreesRotated]);

  const handleImageLoad = useCallback(
    image => {
      // const scaleX = image.naturalWidth / image.width;
      // const scaleY = image.naturalHeight / image.height;
      // const pixelRatio = window.devicePixelRatio;

      // const width = rotate ? crop.height * pixelRatio : crop.width * pixelRatio;
      // const height = rotate ? crop.width * pixelRatio : crop.height * pixelRatio;

      !dimensions && setDimensions(Math.max(image.width, image.height));
    },
    [dimensions]
  );

  useEffect(() => {
    setUserCardImage(
      (userCard?.userCardImages ?? []).find(uci => uci.view === view)
    );
  }, [userCard, view]);

  useEffect(() => {
    !!Array.from(files).length &&
      updateImage(files)
        .then(setLoading(true))
        .then(clearFiles)
        .finally(() => setLoading(false));
  }, [files, clearFiles, updateImage]);

  useEffect(() => {
    setMultiple(false);
  }, [setMultiple]);

  return (
    <UserCardDetailsImageEditorView
      type={type}
      view={view}
      userCard={userCard}
      userCardImage={userCardImage}
      onFrontClick={handleFrontClick}
      onBackClick={handleBackClick}
      onSave={handleSave}
      cropperRef={cropperRef}
      onRotateClick={handleRotateClick}
      onUploadClick={requestUploadDialog}
      onImageLoad={handleImageLoad}
      dimensions={dimensions}
      loading={loading}
    />
  );
};

export default UserCardDetailsImageEditorContainer;
