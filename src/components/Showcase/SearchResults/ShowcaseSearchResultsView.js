import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography } from "@mui/material";
import GradeBadge from "components/Grade/Badge";
import { useTheme } from "@mui/system";

const ShowcaseSearchResultsView = ({
  items,
  selectedUserCards,
  onSelectUserCard,
  onSelectAll,
  selectAll,
  onRemoveUserCard,
  setBottomRef,
}) => (
  <Box sx={{ maxHeight: "calc(100% - 32px)", overflow: "auto" }}>
    <TableContainer>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ px: 0, py: "16px" }}>
              <Checkbox
                color="primary"
                checked={!!selectAll}
                onChange={onSelectAll.bind(null, items)}
              />
            </TableCell>
            <TableCell sx={{ px: "8px", py: "16px" }}>Image</TableCell>
            <TableCell sx={{ px: 0, py: "16px" }}>Card Detail</TableCell>
            <TableCell sx={{ px: 0, py: "16px" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, idx) => (
            <ShowcaseSearchResultsRow
              selected={!!selectedUserCards.find(uc => uc.id === item.id)}
              item={item}
              key={idx}
              onSelect={onSelectUserCard}
              onRemove={onRemoveUserCard}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box ref={setBottomRef}>&nbsp;</Box>
  </Box>
);

const ShowcaseSearchResultsRow = ({ item, selected, onSelect, onRemove }) => (
  <TableRow>
    <TableCell sx={{ px: { md: "16px", xs: 0 }, py: "16px" }}>
      <Checkbox
        color="primary"
        checked={!!selected}
        onClick={
          !!selected ? onRemove.bind(null, item) : onSelect.bind(null, item)
        }
      />
    </TableCell>
    <TableCell
      sx={{
        pl: { md: "16px", xs: "8px" },
        pr: { md: "16px", xs: "0px" },
        py: "16px",
      }}
    >
      <img
        style={{
          height: 96,
          width: "auto",
          objectFit: "contain",
          maxWidth: "65px",
        }}
        alt={item.userCard?.card?.name}
        src={
          item.userCard?.userCardImages?.[0]?.imageUrl ||
          item.userCard?.card?.frontUrl
        }
      />
    </TableCell>
    <TableCell sx={{ px: { md: "16px", xs: "8px" }, py: "16px" }}>
      <Typography variant="h5" sx={{ fontSize: { md: "17px", xs: "13px" } }}>
        {item.userCard?.card?.cardSet?.year}
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { md: "17px", xs: "13px" } }}>
        {item.userCard?.card?.name}
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { md: "17px", xs: "13px" } }}>
        {item.userCard?.card?.cardSet?.name}
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { md: "17px", xs: "13px" } }}>
        #{item.userCard?.card?.cardNumber}
      </Typography>
    </TableCell>
    <TableCell sx={{ p: "16px" }}>
      {(item.userCard?.boundGrade || item.userCard?.cardGrade) && (
        <ConsolidatedBadge
          gradeObj={
            item.userCard?.cardGrade?.grade ?? item.userCard?.boundGrade
          }
        />
      )}
    </TableCell>
  </TableRow>
);

const ConsolidatedBadge = ({ gradeObj }) => {
  const theme = useTheme();
  return (
    <GradeBadge
      gradeVendor={gradeObj.gradeVendor?.name}
      width="40px"
      height="40px"
      color={
        gradeObj.gradeVendor?.name === "PSA"
          ? theme.palette.background.red
          : gradeObj.gradeVendor?.name?.toLowerCase?.() === "raw"
          ? "#dfdfde"
          : theme.palette.background.blue
      }
      textColor={
        gradeObj.gradeVendor?.name?.toLowerCase?.() === "raw"
          ? theme.palette.common.black
          : theme.palette.common.white
      }
      grade={gradeObj.grade}
    />
  );
};

export default ShowcaseSearchResultsView;
