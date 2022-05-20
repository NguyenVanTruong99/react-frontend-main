const style = {
  profileNavbarContainer: {
    width: { md: 100, xs: "100%" },
    height: { md: "100%", xs: 48 },
    mb: { md: 0, xs: 4 },
    borderRadius: 2,
    backgroundColor: theme => theme.palette.white.main,
    boxShadow: {
      md: "none",
      xs: "0px 11px 15px -7px rgba(0, 0, 0, 0.15), 0px 24px 38px 3px rgba(0, 0, 0, 0.08), 0px 9px 46px 8px rgba(0, 0, 0, 0.1)",
    },
  },
  profileNavbarTabButton: {
    width: { md: "inherit", xs: "calc((100% - 16px) / 5)" },
    "&.MuiButtonBase-root.MuiTab-root": {
      textTransform: "none",
      color: theme => theme.palette.grey.B200,
    },
    "&.MuiButtonBase-root.MuiTab-root.Mui-selected": {
      fontWeight: "bold",
      color: theme => theme.palette.text.primary,
    },
    px: 1,
  },
};

export default style;
