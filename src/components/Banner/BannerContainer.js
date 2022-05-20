import { Portal } from "@mui/material";
import { BannerContext } from "contexts/Banner";
import { useContext } from "react";
import BannerView from "./BannerView";

const BannerContainer = props => {
  const banner = useContext(BannerContext);

  return (
    <Portal container={banner.current}>
      <BannerView {...props} />
    </Portal>
  );
};

export default BannerContainer;
