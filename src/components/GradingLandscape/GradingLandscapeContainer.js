import { useCallback, useEffect, useMemo } from "react";

import GradingLandscapeView from "./GradingLandscapeView";
import { listCardGradesByCardId } from "components/CardGrade/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const GradingLandscapeContainer = ({ selectedVendor, cardId, onSelect }) => {
  const [selected, setSelected] = useState(null);
  const theme = useTheme();
  const { loading, data: { listCardGradesByCardId: cardGrades = [] } = {} } =
    useQuery(listCardGradesByCardId, {
      skip: !cardId,
      variables: {
        limit: 200,
        cardId: cardId,
      },
    });

  const handleSelect = useCallback(
    cardGradeId => () => setSelected(cardGradeId),
    [setSelected]
  );

  const filteredCardGrades = useMemo(
    () =>
      cardGrades
        .filter(
          cg =>
            cg.gradeVendor?.name?.toLowerCase?.() ===
            selectedVendor?.toLowerCase?.()
        )
        .filter(cardGrade => cardGrade.gradePop > 0 || cardGrade.currentValue > 0)
        .filter(cg => !!cg.grade.grade),
    [cardGrades, selectedVendor]
  );

  useEffect(() => {
    setSelected(filteredCardGrades[0]?.id);
  }, [setSelected, filteredCardGrades]);

  useEffect(() => {
    onSelect(selected);
  }, [onSelect, selected]);

  return !!loading ? null : (
    <GradingLandscapeView
      cardGrades={filteredCardGrades}
      theme={theme}
      onSelect={handleSelect}
      selected={selected}
    />
  );
};

export default GradingLandscapeContainer;
