import { useCallback, useContext, useState } from "react";

import CardTableToolbarView from "./CardTableToolbarView";
import { CurrentUserContext } from "contexts/CurrentUser";
import { createUserCard } from "components/UserCard/mutations";
import theme from "theme.js";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useMutation } from "@apollo/client";

const CardTableToolbarContainer = ({
  FilterModalProps,
  handleApplyFilters,
  handleRefetch,
  handleResetSelectedRows,
  initialFilters = [],
  selectedRows = [],
}) => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isVisibleColumnModalOpen, setIsVisibleColumnModalOpen] =
    useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [addCardOpen, setAddCardOpen] = useState(false);
  const handleAddCardOpen = useCallback(() => currentUser ? setAddCardOpen(true) : setLoginOpen(true), []);
  const handleAddCardClose = useCallback(() => setAddCardOpen(false), []);
  const [addCardConfirmOpen, setAddCardConfirmOpen] = useState(false);
  const handleAddCardConfirmOpen = useCallback(
    () => setAddCardConfirmOpen(true),
    []
  );
  const handleAddCardConfirmClose = useCallback(
    () => setAddCardConfirmOpen(false),
    []
  );

  const [create] = useMutation(createUserCard);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCloseVisibleColumnModal = () => {
    setIsVisibleColumnModalOpen(false);
  };

  const handleOpenVisibleColumnModal = () => {
    handleMenuClose();
    setIsVisibleColumnModalOpen(true);
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

  const handleAddToCollection = () => {
    setAnchorEl(null);
    handleAddCardClose();
    Promise.resolve(null)
      .then(() => {
        selectedRows
          .map(r => r.id)
          .forEach(id => {
            create({
              variables: {
                input: {
                  cardId: id,
                  isStaged: false,
                },
              },
            });
          });
        if (!!handleResetSelectedRows) handleResetSelectedRows();
      })
      .then(() => handleAddCardConfirmOpen())
      .catch(error => window.alert("Something went wrong." + error));
  };

  const redirectTo = location.pathname

  return (
    <CardTableToolbarView
      anchorEl={anchorEl}
      breadcrumbsVisible={false}
      FilterModalProps={FilterModalProps}
      handleCloseFilterModal={handleCloseFilterModal}
      handleCloseVisibleColumnModal={handleCloseVisibleColumnModal}
      handleFilterChanged={handleFilterChanged}
      handleMenuClose={handleMenuClose}
      handleAddToCollection={handleAddToCollection}
      handleMenuOpen={handleMenuOpen}
      handleOpenFilterModal={handleOpenFilterModal}
      handleOpenVisibleColumnModal={handleOpenVisibleColumnModal}
      handleResetFilterModal={handleResetFilterModal}
      handleShowFilterResults={handleShowFilterResults}
      isFilterModalOpen={isFilterModalOpen}
      isMenuOpen={isMenuOpen}
      isRowsSelected={selectedRows.length > 0}
      isVisibleColumnModalOpen={isVisibleColumnModalOpen}
      selectedFilters={selectedFilters}
      isMobile={isMobile}
      addCardOpen={addCardOpen}
      handleAddCardOpen={handleAddCardOpen}
      handleAddCardClose={handleAddCardClose}
      handleAddCardAction={handleAddToCollection}
      addCardConfirmOpen={addCardConfirmOpen}
      handleAddCardConfirmOpen={handleAddCardConfirmOpen}
      handleAddCardConfirmClose={handleAddCardConfirmClose}
      loginOpen={loginOpen}
      handleLoginClose={() => setLoginOpen(false)}
      redirectTo={redirectTo}
    />
  );
};

export default CardTableToolbarContainer;
