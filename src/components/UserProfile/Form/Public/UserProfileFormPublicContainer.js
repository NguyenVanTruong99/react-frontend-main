import * as yup from "yup";

import { useMutation, useQuery } from "@apollo/client";

import UserProfileFormPublicView from "./UserProfileFormPublicView";
import { getUser } from "components/User/queries";
import { getUserProfile } from "components/UserProfile/queries";
import { updateUser } from "components/User/mutations";
import { updateUserProfile } from "components/UserProfile/mutations";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import withoutBlanks from "utils/withoutBlanks";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  username: yup
      .string()
      .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters allowed")
      .max(17, 'Username limited to 17 characters')
      .required("Display name is required"),
  bio: yup.string().max(150),
  location: yup.string(),
});

const UserProfileFormPublicContainer = ({ user }) => {
  const userId = user?.id;
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
  const [update] = useMutation(updateUser, {
    refetchQueries: [
      {
        query: getUser,
        variables: {
          id: userId,
        },
      },
    ],
  });

  const {
    control,
    reset,
    handleSubmit,
    // getValues,
    // watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const doSubmit = handleSubmit(
    useCallback(
      ({ username, bio, location }) =>
        update({
          variables: {
            input: withoutBlanks({
              id: userId,
              username,
            }),
          },
        })
          .then(
            updateProfile({
              variables: {
                input: withoutBlanks({
                  id: profileId,
                  bio,
                  location,
                }),
              },
            })
          )
          .then(() => reset({ username, bio, location }))
          .catch(err => console.log(err)),
      [userId, profileId, reset, update, updateProfile]
    )
  );

  if (!profile) return null;

  return (
    <UserProfileFormPublicView
      bio={profile?.bio}
      control={control}
      errors={errors}
      isLoading={loading}
      isSaveEnabled={isDirty && isValid}
      location={profile?.location}
      onSubmit={doSubmit}
      username={user?.username}
    />
  );
};

export default UserProfileFormPublicContainer;
