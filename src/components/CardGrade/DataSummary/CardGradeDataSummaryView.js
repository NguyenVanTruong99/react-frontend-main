import { Box, Button, Divider, Grid, IconButton } from "@mui/material";

import DataBox from "components/Data/Box";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NoDataBadge from "assets/images/badge_no_data.png";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import formatNumberAsCurrency from "utils/formatNumberAsCurrency";
import { useState } from "react";

const CardGradeDataSummaryView = ({
  cardGrade,
  first,
  second,
  third,
  startIcon,
  onClick,
  selectedVendor,
  isMobile,
  startValue
}) => {
  const growthChange = cardGrade =>
    (
      ((cardGrade.lastSold - startValue) / startValue) *
      100.0
    ).toFixed(0);
  return (
    cardGrade?.salesCount === 0 ? (
      first || third ? (
        <Box
          sx={{
            backgroundColor: theme => theme.palette.grey.B300,
            p: 8,
            // my: -4,
            width: "auto",
            m: 2,
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: 50,
              width: 50,
              position: "relative",
              top: 78,
              right: 12,
            }}
          >
            <Typography variant="cardLg">
              {cardGrade.grade.gradeVendor.name}
            </Typography>
            <Typography variant="cardLg">
              {cardGrade.grade.gradeDisplay === "0"
                ? ""
                : cardGrade.grade.gradeDisplay}
            </Typography>
          </Box>
          <img
            src={NoDataBadge}
            alt="No Data"
            style={{ height: 80, width: 80, marginBottom: 32 }}
          />
          <Typography align="center" variant="noData">
            No data for this grade. Discover more sales and grades above.
          </Typography>
        </Box>
      ) : (
        <></>
      )
    ) : (
      <Grid container spacing={0}>
        {first &&
          (!isMobile ? (
            <>
              <Grid item xs={4} md={4}>
                <DataBox
                  label="Start Value"
                  value={formatNumberAsCurrency(startValue)}
                  skipDivider={isMobile}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <DataBox
                  label="Rate of Growth"
                  value={
                    cardGrade?.lastSold &&
                    startValue &&
                    `${growthChange(cardGrade)}%`
                  }
                  valueColor={
                    cardGrade?.lastSold &&
                    startValue &&
                    (growthChange(cardGrade) > 0 ? "success.main" : "error.main")
                  }
                  skipDivider={isMobile}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <DataBox
                  label="No. of Sales"
                  value={cardGrade?.salesCount}
                  valueColor="primary"
                  skipDivider={true}
                />
              </Grid>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Box>
                  <DataBox
                    label="Start Value"
                    value={formatNumberAsCurrency(startValue)}
                    skipDivider={isMobile}
                    valueVariant={"CardDetailSmMd"}
                  />
                </Box>
                <Divider
                  sx={{
                    my: 2,
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
                <Box>
                  <DataBox
                    label="Rate of Growth"
                    value={
                      cardGrade?.lastSold &&
                      startValue &&
                      `${growthChange(cardGrade)}%`
                    }
                    valueColor={
                      cardGrade?.lastSold &&
                      startValue &&
                      (growthChange(cardGrade) > 0
                        ? "success.main"
                        : "error.main")
                    }
                    skipDivider={isMobile}
                    valueVariant={"CardDetailSmMd"}
                  />
                </Box>
                <Divider
                  sx={{
                    my: 2,
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
                <Box>
                  <DataBox
                    label="No. of Sales"
                    value={cardGrade?.salesCount}
                    valueColor="primary"
                    skipDivider={true}
                    valueVariant={"CardDetailSmMd"}
                  />
                </Box>
              </Box>
            </>
          ))}
        {second && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              bottom: 10,
            }}
          >
            <Box sx={{ px: 3 }}>
              <DataBox
                label={<Typography variant="cardGreySm">Start Value</Typography>}
                value={
                  <Typography variant="addLg">
                    {formatNumberAsCurrency(startValue)}
                  </Typography>
                }
                skipDivider={true}
              />
            </Box>
            <Divider
              sx={{
                my: 2,
              }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Box sx={{ px: 3 }}>
              <DataBox
                label={
                  <Typography variant="cardGreySm">Rate of Growth</Typography>
                }
                value={
                  <Typography variant="addLg">
                    {cardGrade?.lastSold &&
                      startValue &&
                      `${growthChange(cardGrade)}%`}
                  </Typography>
                }
                valueColor={
                  cardGrade?.lastSold &&
                  startValue &&
                  (growthChange(cardGrade) > 0 ? "success.main" : "error.main")
                }
                skipDivider={true}
              />
            </Box>
            <Divider
              sx={{
                my: 3,
              }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Box sx={{ px: 3 }}>
              <DataBox
                label={<Typography variant="cardGreySm">Last Sold</Typography>}
                value={
                  <Typography
                    variant={cardGrade?.lastSold > 999 ? "addSmall" : "addLg"}
                  >
                    {formatNumberAsCurrency(cardGrade?.lastSold)}
                  </Typography>
                }
                skipDivider={true}
              />
            </Box>
            <Divider
              sx={{
                my: 2,
              }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Box sx={{ px: 2 }}>
              <DataBox
                label={<Typography variant="cardGreySm">Comp Value</Typography>}
                labelIcon={
                  <Box sx={{ position: "absolute", right: -10 }}>
                    <MouseOverPopover />
                  </Box>
                }
                value={
                  <Typography
                    variant={cardGrade?.lastSold > 999 ? "addSmall" : "addLg"}
                  >
                    {formatNumberAsCurrency(cardGrade?.currentValue)}
                  </Typography>
                }
                skipDivider={true}
              />
            </Box>
          </Box>
        )}
        {third &&
          (!isMobile ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {/* <Box>
                  <DataBox
                    label="Sales"
                    value={cardGrade?.salesCount}
                    valueColor="black"
                    skipDivider={true}
                  />
                </Box>
                <Divider
                  sx={{
                    my: 2
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                /> */}
              <Box mb={2}>
                <Button
                  onClick={onClick}
                  variant="outlined"
                  startIcon={startIcon}
                >
                  <Box sx={{ marginTop: "4px", py: 0 }}>
                    Sales History ({cardGrade?.salesCount})
                  </Box>
                </Button>
              </Box>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Box>
                  <DataBox
                    label="Start Value"
                    value={formatNumberAsCurrency(startValue)}
                    skipDivider={isMobile}
                    valueVariant={"CardDetailSmMd"}
                  />
                </Box>
                <Divider
                  sx={{
                    my: 2,
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
                <Box>
                  <DataBox
                    label="Rate of Growth"
                    value={
                      cardGrade?.lastSold &&
                      startValue &&
                      `${growthChange(cardGrade)}%`
                    }
                    valueColor={
                      cardGrade?.lastSold &&
                      startValue &&
                      (growthChange(cardGrade) > 0
                        ? "success.main"
                        : "error.main")
                    }
                    skipDivider={isMobile}
                    valueVariant={"CardDetailSmMd"}
                  />
                </Box>
                <Divider
                  sx={{
                    my: 2,
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
                <Box>
                  <DataBox
                    label="Last Sold"
                    value={formatNumberAsCurrency(cardGrade?.lastSold)}
                    valueColor="primary"
                    skipDivider={true}
                    valueVariant={"CardDetailSmMd"}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Box sx={{ position: "relative", left: "5px" }}>
                  <DataBox
                    label="Comp Value"
                    labelIcon={
                      <Box sx={{ position: "relative" }}>
                        <MouseOverPopover />
                      </Box>
                    }
                    value={
                      <Typography
                        variant={cardGrade?.lastSold > 999 ? "addSmall" : "addLg"}
                      >
                        {formatNumberAsCurrency(cardGrade?.currentValue)}
                      </Typography>
                    }
                    valueColor="black"
                    skipDivider={true}
                  />
                </Box>
                <Divider
                  sx={{
                    my: 2,
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
                <Box>
                  <Button
                    onClick={onClick}
                    variant="outlined"
                    startIcon={startIcon}
                  >
                    <Box sx={{ marginTop: "4px", py: { md: 1, xs: 0 } }}>
                      Sales History ({cardGrade?.salesCount}){" "}
                    </Box>
                  </Button>
                </Box>
              </Box>
            </>
          ))}
      </Grid>
    )
  )
}

const MouseOverPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = event => setAnchorEl(event.currentTarget);

  const handlePopoverClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton
        onClick={handlePopoverOpen}
        // onMouseEnter={handlePopoverOpen}
        // onMouseLeave={handlePopoverClose}
        sx={{
          m: 0,
          p: 0,
        }}
      >
        <HelpOutlineIcon fontSize="small" />
      </IconButton>
      <Popover
        sx={{
          zIndex: 1000,
        }}
        // disableScrollLock
        id="mouse-over-popover-2"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box
          sx={{
            p: 4,
            maxWidth: 300,
          }}
        >
          <Typography variant="h4" sx={{ pb: 4 }}>
            What's Comp Value?
          </Typography>
          <Typography variant="body2">
            The NoXX Comp Value computes the Comp Value by averaging the card's
            sales with recent sales weighted more than previous sales.
          </Typography>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              mt: 8,
              alignItems: "flex-end",
            }}
          >
            <Button onClick={handlePopoverClose} fullWidth variant="outlined">
              Close
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default CardGradeDataSummaryView;
