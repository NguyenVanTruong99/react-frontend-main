const styles = {
  outerBox: {
    position: "relative",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 250,
    position: "relative",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardImage: {
    width: "70px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  checkmarkImage: {
    position: "absolute",
    width: 30,
    height: 30,
    right: -10,
    bottom: -10,
  },
  cardText: {
    fontSize: 12,
  },
  cardTextBold: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cardTextMuted: {
    fontSize: 12,
    color: theme => theme.palette.grey.B200,
  },
  divider: {
    height: "100%",
    top: 0,
    right: -16,
    left: "auto",
  },
};

export default styles;
