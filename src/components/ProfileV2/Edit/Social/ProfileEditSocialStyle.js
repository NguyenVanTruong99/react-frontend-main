import { flexbox } from "@mui/system";

const style = {
  editSocialContainer: {
    width: "100%",
    height: "fit-content",
    p: 2,
  },
  editSocialGrid: {
    position: "relative",
    mt: theme => theme.spacing(4),
  },
  editSocialDivider: {
    left: "-50%",
    display: { sm: "flex", xs: "none" },
  },
  editSocialGridItem: {
    zIndex: 1,
  },
  editSocialGridBuyItem: {
    zIndex: 1,
    mt: { sm: 0, xs: 2 },
  },
  editSocialFormContactBox: {
    width: "100%",
    pl: { sm: 2, xs: 2 },
    pr: { sm: 4, xs: 2 },
  },
  editSocialFormBuyBox: {
    width: "100%",
    pl: { sm: 4, xs: 2 },
    pr: { sm: 2, xs: 2 },
  },
};

export default style;
