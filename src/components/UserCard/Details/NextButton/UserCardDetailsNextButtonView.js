import { Button } from "@mui/material";

const UserCardDetailsNextButtonView = ({ onClick, ...rest }) => (
  <Button variant="outlined" {...rest} onClick={onClick}>
    Skip Card
  </Button>
);

export default UserCardDetailsNextButtonView;
