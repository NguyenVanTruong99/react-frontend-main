import { Box } from "@mui/material";
import GradeBadgeSvg from "./GradeBadgeSvg";

const bgColorMap = {
  raw: "#dfdfde",
  psa: "#DA4C3F",
  bgs: "#438ACF",
  sgc: "#000",
};

const textColorMap = {
  sgc: "white",
  bgs: "white",
  psa: "white",
  raw: "black",
};

const GradingBadgeView = ({
  gradeVendor,
  grade,
  color,
  textColor,
  width = 70,
  height = 70,
}) =>
  gradeVendor ? (
    <Box
      sx={{
        width,
        height,
      }}
    >
      <GradeBadgeSvg
        grade={grade}
        gradeVendor={gradeVendor}
        textColor={
          textColor ?? textColorMap[gradeVendor.toLowerCase()] ?? "white"
        }
        fillColor={color ?? bgColorMap[gradeVendor.toLowerCase()] ?? "red"}
        width={width}
        height={height}
      />
    </Box>
  ) : null;
export default GradingBadgeView;
