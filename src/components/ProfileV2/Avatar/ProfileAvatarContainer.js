import PlayerImg from "assets/images/Player.png";
import ProfileAvatarView from "./ProfileAvatarView";
import useStyle from "./ProfileAvatarStyle";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProfileAvatarContainer = ({
  length,
  sx,
  user,
  userImageUrl,
  onClick,
  userId: passedUserId,
}) => {
  const avatarUrl = userImageUrl
    ? userImageUrl
    : user?.approvedProfileImages?.length > 0
    ? user?.approvedProfileImages[0]?.imageUrl
    : PlayerImg;
  const style = useStyle(length);
  const navigate = useNavigate();
  const userId = passedUserId ?? user?.id;
  const handleDefaultClick = useCallback(() => {
    if (!window.location.pathname.includes(userId))
      navigate(`/users/${userId}`);
  }, [navigate, userId]);

  return (
    <ProfileAvatarView
      avatarUrl={avatarUrl}
      style={style}
      sx={sx}
      onClick={onClick ?? handleDefaultClick}
    />
  );
};

export default ProfileAvatarContainer;
