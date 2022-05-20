import { useCallback, useState } from "react";
import formatNum from "utils/formatNumberToThousandth";
import ProfileInfoCardView from "./ProfileInfoCardView";

const ProfileInfoCardContainer = ({ type, value = 0 }) => {
  return <ProfileInfoCardView type={type} value={formatNum(value)} />;
};

export default ProfileInfoCardContainer;
