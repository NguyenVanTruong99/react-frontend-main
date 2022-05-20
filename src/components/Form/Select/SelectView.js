import { Select as MUISelect } from "@mui/material";
import { styled } from "@mui/material/styles";

const Select = styled(MUISelect)(({ theme }) => ({
  "& input + fieldset": {
    borderColor: theme.palette.grey.B300,
    borderRadius: "5px 5px 0 0",
  },
}));

export default Select;
