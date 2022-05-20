import { Divider, Typography } from "@mui/material";

import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import SaleHistoryItem from "components/Sale/History/Item"


const SaleHistoryView = ({
  timeframeInWords,
  sales,
  Adornment,
  setBottomRef,
}) =>
  <>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="medium">
        Sales{" "}
        {timeframeInWords === "All Time"
          ? timeframeInWords
          : `last ${timeframeInWords}`}
      </Typography>
      {Adornment}
    </Box>
    <Divider />
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Market</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Sold</TableCell>
            <TableCell>Type</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {sales?.edges
            ?.map?.(e => e.node)
            ?.map?.(sale => (
              <SaleHistoryItem key={sale.id} sale={sale} />
            ))}
        </TableBody>
      </Table>
      <Box ref={setBottomRef}>&nbsp;</Box>
    </TableContainer>
  </>

export default SaleHistoryView;
