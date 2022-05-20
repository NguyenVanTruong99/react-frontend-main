import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";

const StyledPopover = styled(Popover)(({ theme }) => ({
  " .MuiPopover-paper": {
    top: "88px!important",
  },
}));

export default StyledPopover;
