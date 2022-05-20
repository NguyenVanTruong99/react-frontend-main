const styles = {
  tabs: {
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      height: "4px",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: "80%",
      width: "100%",
      backgroundColor: theme => theme.palette.accents.blue,
    },
  },
  tab: {
    "&.MuiButtonBase-root.MuiTab-root": {
      textTransform: "none",
      color: theme => theme.palette.grey.B200,
      mt: "3px",
    },
    "&.MuiButtonBase-root.MuiTab-root.Mui-selected": {
      fontWeight: "bold",
      color: theme => theme.palette.text.primary,
    },
  },
};

export default styles;
