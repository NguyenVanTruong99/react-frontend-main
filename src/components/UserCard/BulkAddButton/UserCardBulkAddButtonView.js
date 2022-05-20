import BulkAdd from "assets/images/icons/bulk-add.svg";
import { Button } from "@mui/material";

const UserCardBulkAddButtonView = ({ onClick, count }) => (
  <Button
    variant="outlined"
    sx={{ borderRadius: "4px", fontWeight: 500 }}
    onClick={onClick}
    disabled={count <= 0}
  >
    <img src={BulkAdd} alt="bulk add" style={{ marginRight: "8px" }} />
    Fast Add ({count})
  </Button>
);

export default UserCardBulkAddButtonView;
