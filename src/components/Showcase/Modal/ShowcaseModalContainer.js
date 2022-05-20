import { useMutation, useQuery } from "@apollo/client";

import ShowcaseModalView from "./ShowcaseModalView";
import { createUserCollectionCard } from "components/UserCollectionCard/mutations";
import { listMyShowcases } from "components/UserCollection/queries";
import { useState } from "react";

const ShowcaseModalContainer = ({ isOpen, onClose, onSave, userCardId }) => {
  const [selectedShowcases, setSelectedShowcases] = useState([]);
  const {
    error,
    loading,
    data: { listMyShowcases: showcases = [] } = {},
  } = useQuery(listMyShowcases);
  const [_createUserCollectionCard] = useMutation(createUserCollectionCard, {
    refetchQueries: [listMyShowcases],
  });

  const handleSelectedShowcasesChanged = showcases => {
    setSelectedShowcases(showcases);
  };

  const handleSaveShowcases = () => {
    if (selectedShowcases.length === 0) {
      onClose();
    } else {
      Promise.all([
        selectedShowcases.forEach(showcase => {
          const isUserCardInShowcase = (showcase.userCards ?? [])
            .map(uc => uc.id)
            .includes(userCardId);

          if (!isUserCardInShowcase) {
            _createUserCollectionCard({
              variables: {
                input: {
                  userCardId: userCardId,
                  userCollectionId: showcase.id,
                },
              },
            });
          }
        }),
      ])
        .then(() => {
          onClose();
          if (!!onSave) onSave();
        })
        .catch(e => {
          console.log(e);
          alert("Something went wrong");
        });
    }
  };

  return (
    <ShowcaseModalView
      handleSelectedShowcasesChanged={handleSelectedShowcasesChanged}
      initialSelectedShowcases={showcases.filter(
        showcase => (showcase.userCards ?? [])[0]
      )}
      isOpen={isOpen}
      isShowcasesLoading={loading}
      lockIfInitialSelected={true}
      onClose={onClose}
      onAction={handleSaveShowcases}
      showcases={showcases}
    />
  );
};

export default ShowcaseModalContainer;
