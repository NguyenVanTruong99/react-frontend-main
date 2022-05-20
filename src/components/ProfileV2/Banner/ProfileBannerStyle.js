const style = {
  profileBannerContentBox: {
    position: "relative",
    height: "100%",
  },
  profileBannerImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 8,
  },
  profileBannerImageEditing: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 8,
    filter: "contrast(0.1)",
  },
  editIconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: "50%",
    height: 40,
    width: 40,
    right: 16,
    top: 16,
    backgroundColor: theme => theme.palette.primary.main,
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
  },
  editIcon: {
    fontSize: 18,
  },
};

export default style;
