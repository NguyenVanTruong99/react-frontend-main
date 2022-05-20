import * as React from "react";
import { Typography } from "@mui/material";

import { DateTime } from "luxon";
import LaunchIcon from "@mui/icons-material/Launch";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";
import { gql } from "@apollo/client";
import { SaleHistoryItemFragment } from "./__generated__/SaleHistoryItemFragment";

interface Props {
  sale: SaleHistoryItemFragment
}

const isTooOldToShowEbayLink = (date: string): boolean =>
  DateTime.fromISO(date).diffNow("days").days < -90;

const SaleHistoryItemView = ({sale}: Props): JSX.Element =>
  <TableRow>
    <TableCell sx={{whiteSpace: "nowrap", maxWidth: 20}}>
      <img
        src={sale.saleSource.logoUrl}
        alt={sale.saleSource.name}
        style={{ width: "100%", height: "auto" }}
      />
    </TableCell>
    <TableCell sx={{whiteSpace: "nowrap"}}>
      <Typography>
        {DateTime.fromISO(sale.soldDate)?.toLocaleString?.(
          { day: "numeric", month: "numeric", year: "2-digit" }
        )}
      </Typography>
    </TableCell>
    <TableCell sx={{whiteSpace: "nowrap"}}>{formatNumberAsCurrency(sale.value)}</TableCell>
    <TableCell sx={{whiteSpace: "nowrap"}}>
      <Typography>
        {sale?.saleType?.name}
      </Typography>
    </TableCell>
    <TableCell sx={{whiteSpace: "nowrap"}}>
      {(!isTooOldToShowEbayLink(sale.soldDate) ||
        sale.saleSource.name.toLowerCase() !== "ebay") && (
        <Typography>
          <a
            style={{ color: "inherit" }}
            href={sale.auctionListing.listingUrl}
            target={"_blank"}
            rel="noreferrer"
          >
            <LaunchIcon fontSize="small" />
          </a>
        </Typography>
      )}
    </TableCell>
  </TableRow>

export const saleHistoryItemFragment = gql`
  fragment SaleHistoryItemFragment on Sale {
    value
    soldDate
    saleSource {
      logoUrl
      name
    }
    saleType {
      name
    }
    auctionListing {
      listingUrl
    }
  }
`;

export default SaleHistoryItemView