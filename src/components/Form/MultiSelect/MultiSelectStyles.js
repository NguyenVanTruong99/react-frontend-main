const styles = {
  input: {
    minHeight: 50,
    "& .MuiInputBase-input": {
      padding: theme => theme.spacing(1),
    },
  },
  chip: {
    background: theme => theme.palette.background.grey,
    ".MuiChip-label": {
      maxWidth: 150,
    },
  },
  cancelIcon: {
    fontSize: 18,
  },
};

export default styles;
