import { useCallback, useState } from "react";

import EmptyCardImg from "assets/images/empty-card-image.png";

const ImageContainer = ({ src, Placeholder = EmptyCardImg, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(Placeholder);
  const [hasError, setHasError] = useState(false);
  const handleOnLoad = useCallback(
    () => !hasError && setImgSrc(src),
    [hasError, src]
  );
  const handleOnError = useCallback(
    () => [setHasError(true), setImgSrc(Placeholder)],
    [Placeholder]
  );

  return (
    <>
      <img
        src={src}
        alt="blank"
        onLoad={handleOnLoad}
        style={{ height: 0, width: 0, visibility: "hidden" }}
      />
      <img
        src={imgSrc}
        onError={handleOnError}
        alt={rest?.alt ?? "image"}
        {...rest}
      />
    </>
  );
};

export default ImageContainer;
