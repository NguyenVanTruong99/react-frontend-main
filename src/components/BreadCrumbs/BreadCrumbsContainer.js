import { useState } from "react";
import BreadCrumbsView from "./BreadCrumbsView";

const BreadCrumbsContainer = ({ currentPage, history = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BreadCrumbsView
      anchorEl={anchorEl}
      currentPage={currentPage}
      handleClick={handleClick}
      handleClose={handleClose}
      history={history}
      isOpen={isOpen}
    />
  );
};

export default BreadCrumbsContainer;
