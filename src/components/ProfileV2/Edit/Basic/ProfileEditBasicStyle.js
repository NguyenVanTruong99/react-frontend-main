import { flexbox } from "@mui/system";

const style = {
  editBasicContainer: {
    width: "100%",
    height: "fit-content",
    p: 2,
  },
  editBasicGrid: {
    position: "relative",
    mt: theme => theme.spacing(4),
  },
  editBasicImagesBox: {
    height: 260,
    width: "100%",
    px: theme => theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  editBasicInputsBox: {
    width: "100%",
    px: 2,
  },
  editBasicDivider: {
    left: "-50%",
    top: 0,
    height: "94%",
    display: { sm: "flex", xs: "none" },
  },
  editBasicBannerBox: {
    height: 168,
    width: "100%",
  },
  editBasicAvatarBox: {
    top: 32,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  editBasicActionsBox: {
    mt: { xs: 2, md: 0 },
  },
  editBasicDividerBottom: {
    display: { sm: "flex", xs: "none" },
  },
};

export default style;
