import GradingLandscapeNavView from "./GradingLandscapeNavView";
import { useCallback } from "react";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const GradingLandscapeNavContainer = ({ onSelect, selectedVendor }) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(selectedVendor);

  const handleSelect = useCallback(
    selected => () => [setSelected(selected), onSelect(selected)],
    [setSelected, onSelect]
  );

  return (
    <GradingLandscapeNavView
      selected={selected}
      onSelect={handleSelect}
      theme={theme}
    />
  );
};

export default GradingLandscapeNavContainer;
