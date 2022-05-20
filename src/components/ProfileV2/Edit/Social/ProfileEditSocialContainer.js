import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUserProfile } from "components/UserProfile/queries";
import { updateUserProfile } from "components/UserProfile/mutations";
import withoutBlanks from "utils/withoutBlanks";
import ProfileEditSocialView from "./ProfileEditSocialView";

const URL =
  /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;
const alphanumRegex = /^[\w]*$/;
const twitterRegex = /^[A-Za-z0-9_]+$/;
const facebookRegex = /^[A-Za-z0-9.]*$/;
const instagramRegex = /^[\w.]*$/;

const schema = yup.object({
  websiteUrl: yup
    .string()
    .matches(URL, { message: "Must be a valid url", excludeEmptyString: true }),
  instagramUser: yup.string().matches(instagramRegex, {
    message: "Cannot include the @ symbol",
    excludeEmptyString: true,
  }),
  myslabsUser: yup.string().matches(alphanumRegex, {
    message: "Cannot include the @ symbol",
    excludeEmptyString: true,
  }),
  twitterUser: yup.string().matches(twitterRegex, {
    message: "Cannot include the @ symbol",
    excludeEmptyString: true,
  }),
  facebookName: yup.string().matches(facebookRegex, {
    message: "Cannot include the @ symbol",
    excludeEmptyString: true,
  }),
  youtubeUser: yup.string().matches(alphanumRegex, {
    message: "Cannot include the @ symbol",
    excludeEmptyString: true,
  }),
  ebayName: yup.string().matches(alphanumRegex, {
    message: "Cannot include the @ symbol",
    excludeEmptyString: true,
  }),
  tiktokUser: yup.string().matches(instagramRegex, {
    message: "Cannot include the @ symbol",
    excludeEmptyString: true,
  }),
  whatnotUser: yup.string().matches(alphanumRegex, {
    message: "Cannot include the @ symbol",
    excludeEmptyString: true,
  }),
});

const ProfileEditSocialContainer = ({ user, onClose }) => {
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
        twitterUser,
        facebookName,
        youtubeUser,
        ebayName,
        tiktokUser,
        whatnotUser,
      }) =>
        updateProfile({
          variables: {
            input: {
              id: profileId,
              websiteUrl,
              instagramUser,
              myslabsUser,
              twitterUser,
              facebookName,
              youtubeUser,
              ebayName,
              tiktokUser,

              whatnotUser,
            },
          },
        })
          .then(() =>
            reset({
              websiteUrl,
              instagramUser,
              myslabsUser,
              twitterUser,
              facebookName,
              youtubeUser,
              ebayName,
              tiktokUser,
              whatnotUser,
            })
          )
          .catch(err => console.log(err)),
      [profileId, reset, updateProfile]
    )
  );

  if (!profile) return null;

  return (
    <ProfileEditSocialView
      control={control}
      errors={errors}
      isLoading={loading}
      isSaveEnabled={isDirty && isValid}
      onSubmit={doSubmit}
      onClose={onClose}
      instagramUser={profile.instagramUser}
      facebookName={profile.facebookName}
      youtubeUser={profile.youtubeUser}
      twitterUser={profile.twitterUser}
      tiktokUser={profile.tiktokUser}
      websiteUrl={profile?.websiteUrl}
      ebayName={profile.ebayName}
      myslabsUser={profile.myslabsUser}
      whatnotUser={profile.whatnotUser}
    />
  );
};

export default ProfileEditSocialContainer;
