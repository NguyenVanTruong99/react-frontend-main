import { Divider, Typography } from "@mui/material";

import { Box } from "@mui/system";

const DataBoxView = ({
  label,
  labelIcon,
  value,
  secondaryLabel,
  secondaryValue,
  skipDivider,
  valueColor,
  valueVariant = "cardDetailXmd",
  startDivider,
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row",
      },
      justifyContent: "center",
      py: 1,
    }}
  >
    {startDivider && (
      <>
        <Divider
          sx={{
            display: {
              xs: "none",
              md: "initial",
            },
          }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <Divider
          sx={{
            mt: 2,
            display: {
              xs: "block",
              md: "none",
            },
          }}
          variant="middle"
        />
      </>
    )}
    <Box sx={{ flex: 1 }}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" color={"text.primary"}>
            {label}
          </Typography>
          {labelIcon ?? null}
        </Box>
        <Typography color={valueColor} variant={valueVariant}>
          {value ?? "-"}
        </Typography>
        {(!!secondaryLabel || !!secondaryValue) && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {!!secondaryValue && (
              <Typography sx={{ mr: 1 }} variant="h5" color="success.main">
                {secondaryValue}
              </Typography>
            )}
            {!!secondaryLabel && (
              <Typography sx={{ ml: 1 }} variant="h5">
                {secondaryLabel}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
    {!skipDivider && (
      <>
        <Divider
          sx={{
            display: {
              xs: "none",
              md: "initial",
            },
          }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <Divider
          sx={{
            mt: 2,
            display: {
              xs: "block",
              md: "none",
            },
          }}
          variant="middle"
        />
      </>
    )}
  </Box>
);

export default DataBoxView;
