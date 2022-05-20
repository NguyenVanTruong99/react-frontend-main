const style = {
  profileStatsBox: {
    borderRadius: 1,
    backgroundColor: theme => theme.palette.background.white,
    mb: 2,
  },
  profileStatsHeaderBox: {
    height: 20,
    px: 2,
    py: 1,
    boxSizing: "content-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileStatsHeaderText: {
    textTransform: "uppercase",
    color: theme => theme.palette.grey.B600,
  },
  showcaseStatsCardsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    p: 2,
  },
  profileStatsStack: {
    width: "100%",
  },
  showcaseStatsCard: {
    height: 95,
    width: "100%",
    border: "1px solid",
    borderColor: theme => theme.palette.grey.main,
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  showcaseStatsCardValueBox: {
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  showcaseStatsCardValue: {
    fontWeight: 600,
  },
  showcaseStatsCardMostPopular: {
    fontWeight: 600,
    color: theme => theme.palette.blue.main,
  },
  showcaseStatsCardLabel: {
    color: theme => theme.palette.grey.B700,
  },
};

export default style;
