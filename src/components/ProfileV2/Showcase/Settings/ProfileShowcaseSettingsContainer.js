import { useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import {
  updateUserCollection,
  updateUserCollections,
} from "components/UserCollection/mutations";
import { listShowcasesByUserId } from "components/UserCollection/queries";
import { ModalStateContext } from "contexts/ModalState";
import ProfileShowcaseSettingsView from "./ProfileShowcaseSettingsView";

const ProfileShowcaseSettingsContainer = ({ isMedium, showcases, userId }) => {
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
  const { setAddShowcaseModalOpen } = useContext(ModalStateContext);
  const allHidden = useMemo(
    () => !filteredShowcases.some(showcase => showcase.isVisible),
    [filteredShowcases]
  );
  const updateIds = useMemo(
    () =>
      allHidden
        ? filteredShowcases.map(showcase => showcase.id)
        : filteredShowcases
            .filter(showcase => showcase.isVisible)
            .map(showcase => showcase.id),
    [allHidden, filteredShowcases]
  );
  const navigate = useNavigate();
  const handleAddClick = useCallback(() => {
    setAddShowcaseModalOpen(true);
    navigate("/my-showcases");
  }, [setAddShowcaseModalOpen, navigate]);
  const handleChange = useCallback(
    (e, showcase) => {
      update({
        variables: {
          input: {
            id: showcase.id,
            isVisible: !showcase.isVisible,
            isFeatured: false,
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
            isVisible: allHidden,
            isFeatured: false,
          },
        },
      });
    },
    [updateBulk, updateIds, allHidden]
  );

  return (
    <ProfileShowcaseSettingsView
      isMedium={isMedium}
      handleAddClick={handleAddClick}
      handleChange={handleChange}
      handleBulkChange={handleBulkChange}
      showcases={filteredShowcases}
      allHidden={allHidden}
    />
  );
};

export default ProfileShowcaseSettingsContainer;
