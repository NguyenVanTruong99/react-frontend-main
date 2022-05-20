import { TextField as MUITextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextField = styled(MUITextField)(({ theme }) => ({
  "& input + fieldset": {
    borderColor: theme.palette.grey.B400,
    borderRadius: "5px 5px 0 0",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.grey.B400,
    }
  }
}));

export default TextField;
