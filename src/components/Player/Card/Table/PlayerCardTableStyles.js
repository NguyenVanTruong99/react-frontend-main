import BgLargeBlack from "assets/images/Bg-large-black.png";
import NoxxBG from "assets/images/backgrounds/noxx-bg.png";

const styles = {
  backgroundTop: {
    background: `url(${BgLargeBlack})`,
    backgroundSize: {
      sm: "100% 100%",
      xs: "1000%",
    },
    width: "100vw",
    ml: {
      md: '-24px',
      xs: '-16px',
    },
    px: {
      sm: 8,
      xs: 1,
    },
    my: 3,
  },
  top: {
    // background: theme => theme.palette.background.black,
    // background: 'red',
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: {
      xs: "flex-end",
      md: "center",
    },
    border: 0,
    padding: theme => theme.spacing(2, 1, 0, 2),
    px: {
      xs: 0,
    },
    minHeight: {
      xs: 100,
      md: 300,
    },
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: {
      xs: "12%",
      md: "4%",
    },
    backgroundSize: {
      xs: "50% auto",
      sm: "25% auto",
    },
  },
  backgroundMiddle: {
    border: 0,
    // background: theme => theme.palette.background.black,
    px: {
      sm: 0,
      md: 4,
      xs: 0,
    },
    pb: {
      xs: 8,
    },
  },
  backgroundBottom: {
    // backgroundSize: '100% 100%',
    justifyContent: "center",
    padding: theme => theme.spacing(0),
    border: 0,
    borderRadius: "16px",
    display: {
      xs: "none",
      md: "flex",
    },
    minHeight: 10,
    // borderRadius: '20px'
  },
  headerTextContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: {
      xs: 4,
      s: 2,
    },
    marginLeft: {
      xs: 0,
      md: 3,
    },
  },
  imageContainer: {
    maxHeight: {
      xs: 100,
      md: 300,
    },
    marginRight: {
      xs: 3,
      md: 8,
    },
    img: {
      maxHeight: {
        xs: 100,
        md: 300,
      },
    },
  },
  headerText: {
    fontWeight: 600,
    color: theme => theme.palette.text.white,
    marginBottom: 1,
    lineHeight: 1,
    fontSize: {
      xs: 16,
      md: 36,
    },
    name: {
      fontWeight: 600,
      color: theme => theme.palette.text.white,
      marginBottom: 1,
      lineHeight: 1,
      fontSize: {
        xs: 16,
        md: 50,
      },
    },
  },
  cardCountText: {
    color: theme => theme.palette.text.gold,
  },
};

export default styles;
