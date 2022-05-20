import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const UserCollectionFollowerButtonView = ({
  onClick,
  isFollowing,
  isLoading,
  screenSize,
  inList,
}) => {
  const followingLabel =
    screenSize === "md" ? "Following Showcase" : "Following Showcase";
  const followLabel =
    screenSize === "md" ? "Follow Showcase" : "Follow Showcase";
  const width = screenSize === "md" ? "190px" : "100px";
  const height = screenSize === "md" ? "38.25px" : "48px";

  return inList ? (
    <Button
      variant={"text"}
      onClick={onClick}
      sx={{ p: 0, fontWeight: 400, fontSize: 16, color: "black" }}
    >
      {isFollowing ? "Unfollow Showcase" : "Follow Showcase"}
    </Button>
  ) : (
    <LoadingButton
      sx={{
        width: width,
        height: height,
        lineHeight: 1.4,
      }}
      loading={isLoading}
      variant={isFollowing ? "contained" : "outlined"}
      onClick={onClick}
    >
      {isFollowing ? followingLabel : followLabel}
    </LoadingButton>
  );
};

export default UserCollectionFollowerButtonView;
