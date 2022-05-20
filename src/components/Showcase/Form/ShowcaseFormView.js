import { Box, IconButton } from "@mui/material";
import { Button, TextField, Typography } from "@mui/material";

import BgPattern from "assets/images/Bg-med-pattern.png";
import CloseIcon from "@mui/icons-material/Close";
import { Controller } from "react-hook-form";
import ShowcaseIcon from "assets/images/icons/showcase.png";

const ShowcaseFormView = ({
  isValid,
  control,
  onSubmit,
  isSubmitting,
  onCancel,
  showcaseId,
  showcaseName,
  showcaseDescription,
  mode,
}) => (
  <Box sx={{ p: 0, position: "relative", borderRadius: "8px"}}>
    <Box sx={{ width: "100%", overflow: "hidden", borderRadius: "8px" }}>
      <img src={BgPattern} style={{ width: "100%" }} alt="" />
    </Box>
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: { md: "128px", xs: "76px" },
      }}
    >
      <img
        src={ShowcaseIcon}
        style={{ position: "relative", width: "200px" }}
        alt=""
      />
    </Box>
    <Box sx={{ px: 2, pt: 2, pb: 1 }}>
      <Box
        sx={{
          borderBottom: theme => `1px solid ${theme.palette.divider}`,
          mx: -2,
          mb: 2,
          p: 2,
        }}
      >
        <Box
          sx={{
            px: 2,
            pb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            sx={{ width: "100%", textAlign: "center" }}
          >
            {!showcaseId ? "Create a new Showcase" : "Edit Showcase details"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
        }}
      >
        {mode === "add" && (
          <>
            <Typography variant="h5">
              Showcases are a great way to organize your cards.
            </Typography>
            <Typography paragraph sx={{ mt: 2 }}>
              You can create as many Showcases as you'd like to better stay
              organized with the cards you add to Noxx.
            </Typography>
          </>
        )}

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
          }}
        >
          <Controller
            name="name"
            control={control}
            defaultValue={showcaseName ?? ""}
            render={({ field }) => (
              <TextField
                {...field}
                // select={!!potentialCards.length}
                label={null}
                placeholder="Name your Showcase"
                required
                inputProps={{ maxLength: 20 }}
                sx={{
                  my: 2,
                }}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue={showcaseDescription ?? ""}
            render={({ field }) => (
              <TextField
                {...field}
                // select={!!potentialCards.length}
                multiline
                maxRows={4}
                rows={4}
                label={null}
                placeholder="Write a brief description about this showcase"
                required
                sx={{
                  my: 2,
                }}
              />
            )}
          />
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          mx: -2,
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
            pt: 2,
          }}
        >
          <Button onClick={onCancel} variant="outlined">
            Cancel
          </Button>

          <Button
            onClick={onSubmit}
            disabled={!isValid || !!isSubmitting}
            variant="contained"
          >
            {!showcaseId ? "Create Showcase" : "Save Changes"}
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default ShowcaseFormView;
