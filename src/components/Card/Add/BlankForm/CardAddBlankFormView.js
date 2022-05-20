import { TextField, MenuItem, Typography } from "@mui/material";
import PlayerTagSearchField from "components/Player/TagSearchField";
import { Controller } from "react-hook-form";

const CardAddBlankFormView = ({
  onPlayerTagChange,
  potentialCards,
  control,
  isValid,
  doSubmit,
  getFormValue,
  selectedManufacturerId,
  selectedYear,
  selectedCardSetId,
  selectedCardNum,
}) => (
  <>
    <Typography variant="h5">Basic athelete details</Typography>
    <PlayerTagSearchField onTagChange={onPlayerTagChange} />
    <Controller
      name="year"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          // select={!!potentialCards.length}
          label="Year"
          required
        >
          {/* {
            potentialCards
            .filter((value, index, self) => self.findIndex(m => m.year === value.year) === index)
            .sort((a,b) => a.year > b.year ? -1 : 1)
            .map(option =>
              <MenuItem key={option.year} value={option.year}>
                {option.year}
              </MenuItem>
            )
          } */}
        </TextField>
      )}
    />
    <Controller
      name="manufacturer"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          select={!!potentialCards.length}
          label="Manufacturer"
          required
        >
          {potentialCards
            .filter(
              (value, index, self) =>
                self.findIndex(
                  m => m.manufacturer.id === value.manufacturer.id
                ) === index
            )
            .sort((a, b) =>
              a.manufacturer.name > b.manufacturer.name ? -1 : 1
            )
            .map(option => (
              <MenuItem
                key={option.manufacturer.id}
                value={option.manufacturer.id}
              >
                {option.manufacturer.name}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
    {console.log(
      potentialCards
        .filter(
          (value, index, self) =>
            self.findIndex(m => m.cardSet.id === value.cardSet.id) === index
        )
        .sort((a, b) => (a.cardSet.name > b.cardSet.name ? -1 : 1))
        .map(card => [card.cardSet.id, card.cardSet.name])
    )}
    <Controller
      name="cardSet"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          select={
            !!potentialCards.filter(
              card =>
                card.cardSet.year === selectedYear &&
                card.cardSet.manufacturerId === selectedManufacturerId
            ).length
          }
          label="Set"
          required
        >
          {potentialCards
            .filter(
              card =>
                card.cardSet.year === selectedYear &&
                card.cardSet.manufacturerId === selectedManufacturerId
            )
            .filter(
              (value, index, self) =>
                self.findIndex(m => m.cardSet.id === value.cardSet.id) === index
            )
            .sort((a, b) => (a.cardSet.name > b.cardSet.name ? -1 : 1))
            .map(option => (
              <MenuItem key={option.cardSet.id} value={option.cardSet.id}>
                {option.cardSet.name}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
    <Controller
      name="cardNum"
      control={control}
      defaultValue=""
      render={({ field }) => <TextField {...field} label="Card No." required />}
    />
    <Controller
      name="parallel"
      control={control}
      defaultValue=""
      render={({ field }) => <TextField {...field} label="Parallel" required />}
    />
  </>
);

export default CardAddBlankFormView;
