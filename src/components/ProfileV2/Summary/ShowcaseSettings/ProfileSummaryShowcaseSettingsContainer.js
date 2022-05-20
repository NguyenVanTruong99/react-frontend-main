import { useCallback, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { listShowcasesByUserId } from "components/UserCollection/queries";
import {
  updateUserCollection,
  updateUserCollections,
} from "components/UserCollection/mutations";
import ProfileSummaryShowcaseSettingsView from "./ProfileSummaryShowcaseSettingsView";

const ProfileSummaryShowcaseSettingsContainer = ({
  isMedium,
  showcases,
  userId,
}) => {
  const filteredShowcases = useMemo(
    () => showcases.filter(showcase => showcase.isPublic),
    [showcases]
  );
  const [update] = useMutation(updateUserCollection, {});
  const [updateBulk] = useMutation(updateUserCollections, {
    refetchQueries: [
      {
        query: listShowcasesByUserId,
        variables: {
          userId,
        },
      },
    ],
  });

  const allUnfeatured = useMemo(
    () => !filteredShowcases.some(showcase => showcase.isFeatured),
    [filteredShowcases]
  );
  const updateIds = useMemo(
    () =>
      allUnfeatured
        ? filteredShowcases.map(showcase => showcase.id)
        : filteredShowcases
            .filter(showcase => showcase.isFeatured)
            .map(showcase => showcase.id),
    [allUnfeatured, filteredShowcases]
  );

  const handleChange = useCallback(
    (e, showcase) => {
      update({
        variables: {
          input: {
            id: showcase.id,
            isFeatured: !showcase.isFeatured,
            isVisible: true,
          },
        },
      });
    },
    [update]
  );

  const handleBulkChange = useCallback(
    e => {
      updateBulk({
        variables: {
          input: {
            ids: updateIds,
            isFeatured: allUnfeatured,
            isVisible: true,
          },
        },
      });
    },
    [updateBulk, updateIds, allUnfeatured]
  );

  return (
    <ProfileSummaryShowcaseSettingsView
      isMedium={isMedium}
      handleChange={handleChange}
      showcases={filteredShowcases}
      allUnfeatured={allUnfeatured}
      handleBulkChange={handleBulkChange}
    />
  );
};

export default ProfileSummaryShowcaseSettingsContainer;
