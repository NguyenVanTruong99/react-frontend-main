import CardGradeDataSummaryView from "./CardGradeDataSummaryView";
import { getCardGrade } from "../queries";
import theme from "theme.js";
import { useMediaQuery } from "@mui/material";
import { useQuery } from "@apollo/client";

const CardGradeDataSummaryContainer = ({
  cardGradeId,
  startDate,
  first,
  second,
  third,
  selectedVendor,
  startIcon,
  onClick,
  startValue
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { error, data: { getCardGrade: cardGrade } = {} } = useQuery(
    getCardGrade,
    {
      variables: {
        id: cardGradeId,
        startDate: !!startDate ? startDate.toISO() : undefined,
      },
    }
  );

  !!error && console.error("error", error);

  return (
    <CardGradeDataSummaryView
      cardGrade={cardGrade}
      first={first}
      second={second}
      third={third}
      startIcon={startIcon}
      onClick={onClick}
      selectedVendor={selectedVendor}
      isMobile={isMobile}
      startValue={startValue}
    />
  );
};

export default CardGradeDataSummaryContainer;
