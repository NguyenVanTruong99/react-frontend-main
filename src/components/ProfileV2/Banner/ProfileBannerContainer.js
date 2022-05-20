import { useCallback, useState } from "react";
import ProfileBannerView from "./ProfileBannerView";
import BannerImage from "assets/images/Bg-large-pattern.png";

const ProfileBannerContainer = ({ user, editView = false }) => {
  const imageSrc = user?.profileBannerImage
    ? user.profileBannerImage
    : BannerImage;
  return <ProfileBannerView imageSrc={imageSrc} editView={editView} />;
};

export default ProfileBannerContainer;
