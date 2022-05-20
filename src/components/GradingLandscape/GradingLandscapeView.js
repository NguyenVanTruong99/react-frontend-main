import { Box } from "@mui/system";
import GradeBadge from "components/Grade/Badge";
import { Typography } from "@mui/material";
import addCommas from 'utils/addCommas.js'
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";

const GradingLandscapeView = ({ cardGrades, theme, onSelect, selected }) => (
  <Box sx={{ display: "flex", justifyContent: "flex-start", overflowX: 'scroll', pb: 2 }}>
    {cardGrades
      .sort((a, b) => (a.grade.grade > b.grade.grade ? -1 : 1))
      .map(cardGrade => (
        <Box
          key={cardGrade.id}
          sx={{
            borderRadius: theme => theme.shape.borderRadius,
            mx: 1,
            p: 1,
            px: '12px',
            minWidth: 120,
            border: theme =>
              `2px solid ${selected === cardGrade.id ? "#258aff" : "white"}`,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={onSelect(cardGrade.id)}
          >
            <GradeBadge
              gradeVendor={cardGrade.gradeVendor.name}
              width="40px"
              height="40px"
              grade={cardGrade.grade.gradeDisplay}
            />
          </Box>
          <Typography sx={{ textAlign: "center" }} variant="comp">
            {cardGrade?.currentValue > -5
              ? formatNumberAsCurrency(cardGrade.currentValue)
              : "-"}
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="pop" align="center">
            {["BGS", "SGC"].includes(cardGrade.gradeVendor.name)
              ? ""
              : `Pop. ${addCommas(cardGrade.gradePop)}`}
          </Typography>
        </Box>
      ))}
  </Box>
);

export default GradingLandscapeView;
