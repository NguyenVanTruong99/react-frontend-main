import { IconButton, Input } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import theme from "theme";

const SearchInputView = ({
  onCancel,
  onChange,
  onSubmit,
  showCancel,
  isMobile,
}) => (
  <Input
    placeholder={
      isMobile ? "Search..." : "Search for cards or other collectors..."
    }
    spellCheck={false}
    disableUnderline={true}
    sx={
      isMobile
        ? { width: "100%", padding: theme.spacing(0, 2) }
        : { width: "100%" }
    }
    onChange={onChange}
    onKeyPress={e => {
      if (e.key === "Enter") {
        onSubmit(e);
      }
    }}
    endAdornment={
      showCancel ? (
        <IconButton onClick={onCancel}>
          <CancelIcon />
        </IconButton>
      ) : null
    }
  />
);

export default SearchInputView;
