import { IconButton, InputAdornment, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";

const UserCardSearchView = ({ term, onSearchChange, placeholder }) => (
  <TextField
    placeholder={placeholder}
    label={null}
    value={term}
    onChange={({ target: { value } }) => onSearchChange(value)}
    fullWidth
    sx={{
      backgroundColor: theme => theme.palette.grey.B300,
      mb: "8px",
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
      endAdornment: !term ? null : (
        <InputAdornment position="end">
          <IconButton onClick={() => onSearchChange("")}>
            <CancelIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);

export default UserCardSearchView;
