import { Divider, Grid, Typography } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box } from "@mui/system";
import DataBox from "components/Data/Box";
import { DateTime } from "luxon";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import Tooltip from "@mui/material/Tooltip";
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";

const formatDate = date => {
  return DateTime.fromISO(date).toUTC().toFormat("M/d/yyyy");
};

const isPositive = userCard =>
  !!userCard.cardGrade?.currentValue &&
  (userCard.cardGrade?.currentValue ?? 0) -
    ((userCard.gradingCost ?? 0) + userCard.purchasePrice) >
    0;

const UserCardSummaryView = ({
  userCard,
  open,
  handleOpen,
  handleClose,
  toggle,
  isMobile,
  theme,
}) => (
  <Box onClick={toggle} sx={{ "&:hover": { cursor: "pointer" } }}>
    <Box sx={{ position: "absolute", top: { md: 95, xs: 260 }, left: 0 }}>
      {open ? (
        <ArrowDropUpIcon fontSize="large" />
      ) : (
        <ArrowDropDownIcon fontSize="large" />
      )}
    </Box>
    <Grid container spacing={0}>
      <Grid item xs={6} md={2}>
        <DataBox
          skipDivider={isMobile}
          label="You Paid"
          value={
            userCard.purchasePrice > 0
              ? formatNumberAsCurrency(userCard.purchasePrice)
              : "-"
          }
        />
      </Grid>
      <Grid item xs={6} md={2}>
        <DataBox
          skipDivider={isMobile}
          label="Add. Investment"
          value={
            userCard.gradingCost > 0
              ? formatNumberAsCurrency(userCard.gradingCost)
              : "-"
          }
        />
      </Grid>
      <Grid item xs={6} md={2}>
        <DataBox
          skipDivider={isMobile}
          label="Total Cost"
          value={
            userCard.purchasePrice > 0
              ? formatNumberAsCurrency(
                  (userCard.gradingCost ?? 0) + userCard.purchasePrice
                )
              : "-"
          }
        />
      </Grid>
      <Grid item xs={6} md={2}>
        <DataBox
          skipDivider={isMobile}
          label="Comp Value"
          value={
            userCard.cardGrade?.currentValue > 0 ? (
              formatNumberAsCurrency(userCard.cardGrade?.currentValue)
            ) : (
              <Tooltip
                disableFocusListener
                enterTouchDelay={0}
                placement="top"
                title={"We're finding your comp, check back later!"}
              >
                <ModelTrainingIcon
                  style={{ color: theme.palette.primary.main }}
                ></ModelTrainingIcon>
              </Tooltip>
            )
          }
        />
      </Grid>
      <Grid item xs={6} md={2}>
        <DataBox
          skipDivider={isMobile}
          label="Profit / Loss"
          value={
            !!userCard.cardGrade?.currentValue ? (
              `${isPositive(userCard) ? "+" : ""}${formatNumberAsCurrency(
                (userCard.cardGrade?.currentValue ?? 0) -
                  ((userCard.gradingCost ?? 0) + userCard.purchasePrice)
              )}`
            ) : (
              <Typography variant="cardDetailXmd">--</Typography>
            )
          }
          valueColor={isPositive(userCard) ? "success.main" : "error.main"}
        />
      </Grid>
      <Grid item xs={6} md={2}>
        <DataBox
          skipDivider
          label="Status"
          value={
            userCard.cardStatus ? (
              <Typography variant="md">
                {userCard.cardStatus?.toUpperCase()}
              </Typography>
            ) : (
              "-"
            )
          }
        />
      </Grid>
    </Grid>
    {open && (
      <>
        <Box sx={{ py: 2 }}>
          <Divider />
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={6} md={2}>
            <DataBox
              skipDivider={isMobile}
              label="Edition #"
              value={userCard.editionNumber}
              valueVariant="h5"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <DataBox
              skipDivider={isMobile}
              label="Edition Size"
              value={userCard.editionSize}
              valueVariant="h5"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <DataBox
              skipDivider={isMobile}
              label="Storage Location"
              value={userCard.storageLocation}
              valueVariant="h5"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <DataBox
              label="Showcases"
              skipDivider={isMobile}
              value={userCard.showcaseCount > 0 ? userCard.showcaseCount : "-"}
              valueColor={"black"}
              valueVariant="h5"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <DataBox
              label="Acquired"
              skipDivider={isMobile}
              value={
                userCard.acquiredAt ? formatDate(userCard.acquiredAt) : "-"
              }
              valueVariant="h5"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <DataBox
              skipDivider
              label="Acquisition Source"
              value={userCard.acquisitionSource}
              valueVariant="h5"
            />
          </Grid>
        </Grid>
      </>
    )}
  </Box>
);

export default UserCardSummaryView;
