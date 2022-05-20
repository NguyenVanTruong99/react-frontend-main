import { Button } from "@mui/material";
import LoginModal from "components/LoginModal";
import styles from "./UserFollowerButtonStyles";

const UserFollowerButtonView = ({
  isDisabled,
  isFollowing,
  onFollow,
  onUnfollow,
  sx,
  loginOpen,
  handleLoginClose,
  redirectTo,
  ...rest
}) =>
  <>
    <LoginModal open={loginOpen} handleClose={handleLoginClose} redirectTo={redirectTo} />
    {isFollowing ? (
      <Button
        disabled={isDisabled}
        size="medium"
        variant="contained"
        sx={{ ...styles.buttonFollowing, ...sx }}
        onClick={onUnfollow}
        {...rest}
      >
        Following
      </Button>
    ) : (
      <Button
        disabled={isDisabled}
        size="medium"
        variant="outlined"
        sx={{ ...styles.button, ...sx }}
        onClick={onFollow}
        {...rest}
      >
        Follow
      </Button>
    )}</>;

export default UserFollowerButtonView;
