import * as yup from "yup";

import {
  listCountries,
  listStatesByCountryId,
} from "components/Address/queries";
import { useCallback, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import UserProfileFormPrivateView from "./UserProfileFormPrivateView";
import { getUserProfile } from "components/UserProfile/queries";
import { updateUserProfile } from "components/UserProfile/mutations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().required(),
  phoneNumber: yup.string(),
  address1: yup.string(),
  address2: yup.string(),
  city: yup.string(),
  zip: yup.string(),
  state: yup.string(),
  country: yup.string(),
});

const UserProfileFormPrivateContainer = ({ user }) => {
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

  const { data: countryData } = useQuery(listCountries);
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

  const [selectedCountry, setSelectedcountry] = useState();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const watchCountry = watch("country", "United States");

  const { data: stateData } = useQuery(listStatesByCountryId, {
    skip: !countryData?.listCountries,
    variables: {
      countryId: countryData?.listCountries?.find(c => c.name === watchCountry)
        ?.id,
    },
  });

  const doSubmit = handleSubmit(
    useCallback(
      ({
        firstName,
        lastName,
        phoneNumber,
        address1,
        address2,
        state,
        city,
        zip,
        country,
      }) =>
        updateProfile({
          variables: {
            input: {
              id: profileId,
              firstName,
              lastName,
              phoneNumber,
              address1,
              address2,
              state,
              city,
              zip,
              country,
            },
          },
        })
          .then(() =>
            reset({
              firstName,
              lastName,
              phoneNumber,
              address1,
              address2,
              state,
              city,
              zip,
              country,
            })
          )
          .catch(err => console.log(err)),
      [profileId, reset, updateProfile]
    )
  );

  if (!profile) return null;

  return (
    <UserProfileFormPrivateView
      control={control}
      countries={countryData?.listCountries || []}
      errors={errors}
      isLoading={loading}
      isSaveEnabled={isDirty && isValid}
      onSubmit={doSubmit}
      states={stateData?.listStatesByCountryId || []}
      // form attributes
      email={user.email}
      firstName={profile.firstName}
      lastName={profile.lastName}
      address1={profile.address1}
      address2={profile.address2}
      city={profile.city}
      state={profile.state}
      phoneNumber={profile.phoneNumber}
      country={profile.country || "United States"}
      zip={profile.zip}
    />
  );
};

export default UserProfileFormPrivateContainer;
