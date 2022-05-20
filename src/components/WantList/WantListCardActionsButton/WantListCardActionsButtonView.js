import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import { Controller } from "react-hook-form";
import Dots from "assets/images/icons/dots.svg";
import EditCardBg from "assets/images/EditCardBg.png";
import EditIcon from "@mui/icons-material/Edit";
import ModalPrompt from "components/ModalPrompt";
import NumberFormat from "react-number-format";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const services = [
  { label: "BGS", value: "BGS" },
  { label: "PSA", value: "PSA" },
  { label: "SGC", value: "SGC" },
];

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const WantlistCardActionsButtonView = ({
  wantlistCard,
  wlCard,
  onClick,
  onClose,
  isOpen,
  anchorEl,
  onEdit,
  editOpen,
  onEditClose,
  onCancel,
  showModal,
  onDelete,
  sx,
  color,
  size,
  unfollowOpen,
  handleUnfollowOpen,
  handleUnfollowClose,
  control,
  watch,
  allGrades,
  onSubmit,
  service,
  editOnly,
  errors,
  isValid,
}) => (
  <>
    {editOnly ? (
      <IconButton sx={!!sx ? sx : {}} onClick={onEdit}>
        <EditIcon color="primary" />
      </IconButton>
    ) : (
      <IconButton sx={!!sx ? sx : {}} onClick={onClick}>
        {size === "large" ? (
          <img src={Dots} alt="dots" color={color} fontSize="large" />
        ) : (
          <PendingOutlinedIcon color={color} />
        )}
      </IconButton>
    )}
    {!!isOpen && (
      <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
        <MenuItem onClick={onEdit}>Edit</MenuItem>
        <Divider />
        <MenuItem key="1" onClick={handleUnfollowOpen}>
          Remove from Want List
        </MenuItem>
      </Menu>
    )}
    <Modal
      open={showModal}
      onClick={event => event.stopPropagation()}
      // onClick={setModalOpen.bind(null, false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "100%",
            md: 600,
          },
          height: {
            xs: "100%",
            md: "auto",
          },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 0,
        }}
      ></Box>
    </Modal>
    <ModalPrompt
      open={!!unfollowOpen}
      promptMessage={
        <Typography p={4}>
          Are you sure you want to remove this card from your wantlist?
        </Typography>
      }
      closeMessage="No"
      actionMessage="Yes"
      handleClose={handleUnfollowClose}
      handleAction={onDelete}
    />
    <Modal
      open={editOpen}
      // onClick={onEditClose}
      // onClick={event => event.stopPropagation()}
      // onClick={setModalOpen.bind(null, false)}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xs: "100%",
              md: 600,
            },
            // minHeight: {
            //   xs: "100%",
            //   md: "65vh",
            // },
            // bgcolor: "background.paper",
            background: `url(${EditCardBg})`,
            backgroundSize: "100% 100%",
            boxShadow: 0,
            p: 0,
          }}
        >
          <Box sx={{ p: 4 }}>
            <Typography variant="wantListMd">
              Add Wanted Card Details
            </Typography>
            <Grid container columnSpacing={2} rowSpacing={1} pt={2}>
              <Grid item xs={12}>
                <Typography variant="chart">Grade Wanted</Typography>
              </Grid>
              <Grid item xs={4} md={3}>
                <Controller
                  name="service"
                  control={control}
                  defaultValue={service ?? ""}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label={
                        <Typography variant="placeholder">Service</Typography>
                      }
                      InputLabelProps={{ required: false }}
                      required
                      fullWidth
                    >
                      {services.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Controller
                  name="cardGradeId"
                  control={control}
                  defaultValue={wlCard.cardGradeId ?? ""}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label={
                        <Typography variant="placeholder">
                          {watch("service")} Grade
                        </Typography>
                      }
                      InputLabelProps={{ required: false }}
                      required
                      fullWidth
                    >
                      {allGrades
                        .filter(
                          grade =>
                            grade.grade.gradeVendor.name === watch("service")
                        )
                        .sort((a, b) => {
                          return b.grade.grade - a.grade.grade;
                        })
                        .map(grade => (
                          <MenuItem key={grade.id} value={grade.id}>
                            {grade.grade.gradeDisplay}
                          </MenuItem>
                        ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={2} md={3}>
                <Controller
                  name="isHigher"
                  control={control}
                  defaultValue={wlCard.isHigher}
                  render={({ field }) => (
                    <Button
                      size="small"
                      disabled={!watch("cardGradeId")}
                      fullWidth
                      variant={field.value ? "contained" : "outlined"}
                      sx={{ height: "100%" }}
                      onClick={() => field.onChange(!field.value)}
                    >
                      Or Higher
                    </Button>
                  )}
                />
              </Grid>
              <Grid item xs={4} md={4} mt={2}>
                <Typography variant="chart">Acquisition</Typography>
              </Grid>
              <Grid item xs={8} md={8} mt={2}>
                <Typography variant="chart">Budget Range</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                md={4}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: { xs: "space-between", md: "flex-start" },
                }}
              >
                <Box sx={{}}>
                  <Controller
                    name="willTradeFor"
                    control={control}
                    defaultValue={wlCard.willTradeFor}
                    render={({ field }) => (
                      <Button
                        variant={field.value ? "contained" : "outlined"}
                        sx={{
                          height: { xs: 56, md: "100%" },
                          width: { xs: "90%", md: "auto" },
                          mr: { xs: 0, md: 2 },
                          mb: { xs: 1, mb: 0 },
                        }}
                        onClick={() => field.onChange(!field.value)}
                      >
                        Trade
                      </Button>
                    )}
                  />
                </Box>
                <Box>
                  <Controller
                    name="willBuy"
                    control={control}
                    defaultValue={wlCard.willBuy}
                    render={({ field }) => (
                      <Button
                        variant={field.value ? "contained" : "outlined"}
                        sx={{
                          height: { xs: 56, md: "100%" },
                          width: { xs: "90%", md: "auto" },
                        }}
                        onClick={() => field.onChange(!field.value)}
                      >
                        Buy
                      </Button>
                    )}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={8}
                md={8}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Controller
                  name="budgetLow"
                  control={control}
                  defaultValue={wlCard.budgetLow ?? ""}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ mb: { xs: 1, md: 0 } }}
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                      label={
                        <Typography variant="placeholderSm">$ Min</Typography>
                      }
                      fullWidth
                    />
                  )}
                />
                <Typography variant="noData" px={2} display={{ xs: "none" }}>
                  {" "}
                  &mdash;{" "}
                </Typography>
                <Controller
                  name="budgetHigh"
                  control={control}
                  defaultValue={wlCard.budgetHigh ?? ""}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                      label={
                        <Typography variant="placeholderSm">$ Max</Typography>
                      }
                      fullWidth
                    />
                  )}
                />
              </Grid>
              {/* <Grid item xs={12} md={4} mt={2}>
                <Typography pb={1} variant="chart">&nbsp;</Typography>
              </Grid> */}
              <Grid item xs={12} mt={3}>
                <Controller
                  name="comment"
                  control={control}
                  defaultValue={wlCard.comment ?? ""}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors?.comment}
                      helperText={errors?.comment?.message}
                      multiline
                      fullWidth
                      label={
                        <Typography variant="placeholder">
                          Enter any other elements of this card that you are
                          looking for
                        </Typography>
                      }
                      rows={4}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Divider />
            <Box
              sx={{
                px: 4,
                py: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button variant="outlined" onClick={onEditClose} type="submit">
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={onSubmit}
                disabled={!isValid}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  </>
);

export default WantlistCardActionsButtonView;
