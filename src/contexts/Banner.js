import { Box } from "@mui/material";
import React from "react";

const BannerContext = React.createContext();

const BannerProvider = ({ children }) => {
  const container = React.useRef(null);

  return (
    <BannerContext.Provider value={container}>
      <Box ref={container} />
      {children}
    </BannerContext.Provider>
  );
};

export { BannerContext, BannerProvider };
