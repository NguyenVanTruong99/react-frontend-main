import { useCallback, useState } from "react";

import ImageViewerView from "./ImageViewerView";

const ImageViewerContainer = ({ imageSrcs }) => {
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrcs[0]);
  const firstImageSrc = imageSrcs[0];
  const lastImageSrc = imageSrcs.slice(-1)[0];
  const nextImageSrc =
    imageSrcs[imageSrcs.findIndex(src => src === currentImageSrc) + 1];
  const prevImageSrc =
    imageSrcs[imageSrcs.findIndex(src => src === currentImageSrc) - 1];

  console.log("nextImageSrc", nextImageSrc, currentImageSrc);

  const handleNext = useCallback(
    () => setCurrentImageSrc(nextImageSrc),
    [nextImageSrc]
  );

  const handlePrevious = useCallback(
    () => setCurrentImageSrc(prevImageSrc),
    [prevImageSrc]
  );

  const handleOpen = useCallback(
    () => window.open(currentImageSrc, "_blank"),
    [currentImageSrc]
  );

  return (
    <ImageViewerView
      currentImageSrc={currentImageSrc}
      firstImageSrc={firstImageSrc}
      lastImageSrc={lastImageSrc}
      onOpen={handleOpen}
      onPrevious={handlePrevious}
      onNext={handleNext}
    />
  );
};
export default ImageViewerContainer;
