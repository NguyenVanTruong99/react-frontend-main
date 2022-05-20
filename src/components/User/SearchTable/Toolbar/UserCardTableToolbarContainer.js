import { useCallback, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import UserCardTableToolbarView from "./UserCardTableToolbarView";
import { createUserCollectionCard } from "components/UserCollectionCard/mutations";
import { deleteUserCards } from "components/UserCard/mutations";
import { listMyShowcases } from "components/UserCollection/queries";

const UserCardTableToolbarContainer = ({
  FilterModalProps,
  handleApplyFilters,
  handleRefetch,
  handleResetSelectedRows,
  initialFilters = [],
  selectedRows = [],
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isShowcaseModalOpen, setIsShowcaseModalOpen] = useState(false);
  const [selectedShowcases, setSelectedShowcases] = useState([]);
  const isMenuOpen = Boolean(anchorEl);
  const [deleteCards] = useMutation(deleteUserCards);
  const [_createUserCollectionCard] = useMutation(createUserCollectionCard, {
    refetchQueries: [listMyShowcases],
  });
  const {
    error,
    loading,
    data: { listMyShowcases: showcases = [] } = {},
  } = useQuery(listMyShowcases);
  const selectedUserCards = selectedRows.map(s => s.userCard);
  const [deleteCardOpen, setDeleteCardOpen] = useState(false);
  const handleDeleteCardOpen = useCallback(() => setDeleteCardOpen(true), []);
  const handleDeleteCardClose = useCallback(() => setDeleteCardOpen(false), []);
  const [addConfirmOpen, setAddConfirmOpen] = useState(false);
  const handleAddConfirmOpen = useCallback(() => setAddConfirmOpen(true), []);
  const handleAddConfirmClose = useCallback(() => setAddConfirmOpen(false), []);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleOpenFilterModal = () => {
    handleMenuClose();
    setIsFilterModalOpen(true);
  };

  const handleResetFilterModal = () => {
    setSelectedFilters({});
  };

  const handleFilterChanged = (field, value) => {
    let newFilters = { ...selectedFilters };

    if (!value && field in newFilters) {
      delete newFilters[field];
    } else if (value) {
      newFilters[field] = value;
    }

    setSelectedFilters(newFilters);
  };

  const handleShowFilterResults = () => {
    handleCloseFilterModal();

    if (handleApplyFilters) {
      handleApplyFilters(selectedFilters);
    }
  };

  const handleRemoveFromCollection = () => {
    handleDeleteCardClose();
    const deleteIds = selectedRows.map(r => r.id);

    if (deleteIds.length > 0) {
      deleteCards({ variables: { input: { ids: deleteIds } } })
        .then(() => {
          if (!!handleRefetch) handleRefetch();
          if (!!handleResetSelectedRows) handleResetSelectedRows();
        })
        .catch(e => console.log(e));
    }
  };

  const handleSaveShowcases = () => {
    if (selectedShowcases.length === 0 || selectedRows.length === 0) {
      handleCloseShowcaseModal();
    } else {
      Promise.all([
        selectedShowcases.forEach(showcase => {
          const showcaseUserCardIds = showcase.userCards.map(uc => uc.id);
          const cardsToAdd = selectedRows
            .filter(r => !showcaseUserCardIds.includes(r.userCard?.id))
            .map(r => r.userCard);

          // console.log(showcaseUserCardIds)
          // console.log(cardsToAdd)

          cardsToAdd.forEach(userCard => {
            _createUserCollectionCard({
              variables: {
                input: {
                  userCardId: userCard.id,
                  userCollectionId: showcase.id,
                },
              },
            });
          });
        }),
      ])
        .then(() => {
          handleCloseShowcaseModal();
          handleAddConfirmOpen();
        })
        .catch(err => alert("Something went wrong"));
    }
  };

  const handleOpenShowcaseModal = () => {
    setIsShowcaseModalOpen(true);
  };

  const handleCloseShowcaseModal = () => {
    setIsShowcaseModalOpen(false);
  };

  const handleSelectedShowcasesChanged = showcases => {
    setSelectedShowcases(showcases);
  };

  return (
    <UserCardTableToolbarView
      anchorEl={anchorEl}
      FilterModalProps={FilterModalProps}
      handleCloseFilterModal={handleCloseFilterModal}
      handleCloseShowcaseModal={handleCloseShowcaseModal}
      handleFilterChanged={handleFilterChanged}
      handleMenuClose={handleMenuClose}
      handleMenuOpen={handleMenuOpen}
      handleOpenFilterModal={handleOpenFilterModal}
      handleOpenShowcaseModal={handleOpenShowcaseModal}
      handleRemoveFromCollection={handleRemoveFromCollection}
      handleResetFilterModal={handleResetFilterModal}
      handleSaveShowcases={handleSaveShowcases}
      handleSelectedShowcasesChanged={handleSelectedShowcasesChanged}
      handleShowFilterResults={handleShowFilterResults}
      isFilterModalOpen={isFilterModalOpen}
      isMenuOpen={isMenuOpen}
      isRowsSelected={selectedRows.length > 0}
      isShowcaseModalOpen={isShowcaseModalOpen}
      isShowcasesLoading={loading}
      selectedFilters={selectedFilters}
      showcases={showcases}
      initialSelectedShowcases={showcases.filter(
        showcase => (showcase.userCards ?? [])[0]
      )}
      deleteCardOpen={deleteCardOpen}
      handleDeleteCardOpen={handleDeleteCardOpen}
      handleDeleteCardClose={handleDeleteCardClose}
      handleDeleteCardAction={handleRemoveFromCollection}
      addConfirmOpen={addConfirmOpen}
      handleAddConfirmClose={handleAddConfirmClose}
    />
  );
};

export default UserCardTableToolbarContainer;
