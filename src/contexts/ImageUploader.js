import React, { useCallback, useRef, useState } from "react";

const ImageUploaderContext = React.createContext();

const ImageUploaderProvider = ({ children }) => {
  const inputEl = useRef(null);
  const [files, setFiles] = useState([]);
  const [multiple, setMultiple] = useState();

  const clearFiles = useCallback(() => setFiles([]), []);

  const handleSelect = useCallback(
    ({ target: { files } }) => {
      console.log("files", files?.length);
      setFiles(files);
      setTimeout(() => {
        inputEl.current.value = null;
      }, 500);
    },
    [inputEl]
  );

  const requestUploadDialog = useCallback(() => inputEl.current.click(), []);

  return (
    <ImageUploaderContext.Provider
      value={{ files, requestUploadDialog, setMultiple, clearFiles }}
    >
      <>
        <input
          multiple={multiple}
          style={{ visibility: "hidden", display: "none" }}
          type="file"
          ref={inputEl}
          accept=".jpg, .jpeg, .png"
          onChange={handleSelect}
        />
        {children}
      </>
    </ImageUploaderContext.Provider>
  );
};

export { ImageUploaderContext, ImageUploaderProvider };
