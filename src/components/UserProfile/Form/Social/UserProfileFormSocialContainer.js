import * as yup from "yup";

import { useMutation, useQuery } from "@apollo/client";

import UserProfileFormSocialView from "./UserProfileFormSocialView";
import { getUserProfile } from "components/UserProfile/queries";
import { updateUserProfile } from "components/UserProfile/mutations";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const URL =
  /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

const schema = yup.object({
  websiteUrl: yup.string().matches(URL, "must be a valid url"),
  instagramUser: yup.string(),
  myslabsUser: yup.string(),
  starstockUser: yup.string(),
  twitterUser: yup.string(),
  facebookName: yup.string(),
  youtubeUser: yup.string(),
  ebayName: yup.string(),
  tiktokUser: yup.string(),
  snapchatUser: yup.string(),
  whatnotUser: yup.string(),
});

const UserProfileFormSocialContainer = ({ user }) => {
  const profileId = user?.profile?.id;
  const {
    error,
    loading,
    data: { getUserProfile: profile } = {},
  } = useQuery(getUserProfile, {
    skip: !profileId,
    variables: {
      id: profileId,
    },
  });
  const [updateProfile] = useMutation(updateUserProfile, {
    refetchQueries: [
      {
        query: getUserProfile,
        variables: {
          id: profileId,
        },
      },
    ],
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const doSubmit = handleSubmit(
    useCallback(
      ({
        websiteUrl,
        instagramUser,
        myslabsUser,
        starstockUser,
        twitterUser,
        facebookName,
        youtubeUser,
        ebayName,
        tiktokUser,
        snapchatUser,
        whatnotUser,
      }) =>
        updateProfile({
          variables: {
            input: {
              id: profileId,
              websiteUrl,
              instagramUser,
              myslabsUser,
              starstockUser,
              twitterUser,
              facebookName,
              youtubeUser,
              ebayName,
              tiktokUser,
              snapchatUser,
              whatnotUser,
            },
          },
        })
          .then(() =>
            reset({
              websiteUrl,
              instagramUser,
              myslabsUser,
              starstockUser,
              twitterUser,
              facebookName,
              youtubeUser,
              ebayName,
              tiktokUser,
              snapchatUser,
              whatnotUser,
            })
          )
          .catch(err => console.log(err)),
      [profileId, reset, updateProfile]
    )
  );

  if (!profile) return null;

  return (
    <UserProfileFormSocialView
      control={control}
      errors={errors}
      isLoading={loading}
      isSaveEnabled={isDirty && isValid}
      onSubmit={doSubmit}
      // fields
      websiteUrl={profile?.websiteUrl}
      instagramUser={profile.instagramUser}
      myslabsUser={profile.myslabsUser}
      starstockUser={profile.starstockUser}
      twitterUser={profile.twitterUser}
      facebookName={profile.facebookName}
      youtubeUser={profile.youtubeUser}
      ebayName={profile.ebayName}
      tiktokUser={profile.tiktokUser}
      snapchatUser={profile.snapchatUser}
      whatnotUser={profile.whatnotUser}
    />
  );
};

export default UserProfileFormSocialContainer;
