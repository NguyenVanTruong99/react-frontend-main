import MobileBg from "assets/images/backgrounds/MobilePlayerBg.png";
import NoxxBg from "assets/images/Bg-large-pattern.png";
import NoxxCardMetaBg from "assets/images/badge_item_1.svg";
import NoxxCardMetaBgSecond from "assets/images/player_card_second.svg";
import NoxxPattern from "assets/images/noxx-bg-pattern.png";
import PlayerBg from "assets/images/backgrounds/PlayerBg-half.png";
import WhiteNotch from "assets/images/Bg-notch-top-right-cut.png";

const styles = {
  playerDetailRoot: {
    pt: 2,
    // width: {
    //   xs: "calc(100vw - 16px)",
    //   md: "1200px",
    // },
    mb: -5,
    header: {
      maxWidth: 1200,
      margin: '0 auto',
      pl: { xs: 0, md: 6 },
      height: {
        xs: "200px",
        md: "350px",
      },
      // backgroundImage: {
      //   xs: `url(${NoxxBg})`,
      //   md: 'unset',
      // },
      backgroundPosition: {
        xs: `bottom center`,
        md: `unset`,
      },
      backgroundsize: {
        xs: `300% 300%`,
        md: `unset`,
      },
      display: "flex",
      flexDirection: "row",
      flexWrap: "no-wrap",
      justifyContent: "flex-start",
      overflow: "hidden",
      position: "relative",
      width: {
        xs: "100vw",
        md: "unset",
      },
      margin: {
        xs: "-16px 0 0 -16px",
        md: "0 auto",
      },
      playerInfo: {
        mt: {
          xs: 0,
          md: 4,
        },
        flex: 3,
        noxxData: {
          mt: 2,
          backgroundImage: `url(${NoxxCardMetaBg})`,
          backgroundRepeat: "no-repeat",
          // width: "115px",
          px: 1,
          marginLeft: {
            xs: "8px",
            md: "unset",
          },

        },
        noxxDataSecond: {
          mt: 2,
          backgroundImage: `url(${NoxxCardMetaBgSecond})`,
          backgroundRepeat: "no-repeat",
          // width: "115px",
          px: 1,
          pl: 2,
          marginLeft: {
            xs: "8px",
            md: "unset",
          },
          position: "relative",
          left: -5
        },
        noxxDataMeta: {
          width: 100,
        },
        noxxDataMetaSecond: {
          width: 110,
        },
        noxxDataMetaContainer: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",

        },
      },
      playerImage: {
        flex: 1,
        position: "relative",
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: 'flex-end',
        img: {
          position: { xs: 'relative', md: "absolute" },
          bottom: { xs: '7px', md: "0" },
          height: { xs: '80%', md: "90%" },
          right: { xs: '0', md: "25%" },
          zIndex: 3,
        },
      },
      shareIconBox: {
        position: "absolute",
        top: {
          xs: "20px",
          md: "40px",
        },
        right: "24px",
        background: "transparent",
        width: "48px",
        height: "48px",
        borderRadius: "100%",
        zIndex: 5,
        border: "2px solid rgba(255,255,255,0.2)",
        shareIcon: {
          width: "44px",
          height: "40px",
          svg: {
            width: "24px",
            height: "24px",
          },
        },
        heartIcon: {},
      },
    },
    stats: {
      margin: {
        md: "0 auto 24px 0",
        xs: "24px 0",
      },
      position: "relative",
      padding: "0",
      zIndex: 3,
      // borderWidth: "1px",
      // borderStyle: "solid",
      // borderColor: "#e7e8f0",
      boxSizing: "border-box",
      // backgroundColor: "#fff",
      background: `url(${PlayerBg})`,
      backgroundSize: "100% 100%",
      // borderRadius: "8px",
      width: {
        md: "60%",
        xs: "calc(100vw - 32px)",
      },
      // "&:before": {
      //   content: '""',
      //   backgroundImage: `url(${WhiteNotch})`,
      //   backgroundColor: { xs: "white", md: "#0E0E10" },
      //   backgroundPosition: "top right",
      //   position: "absolute",
      //   margin: "-2px -1px 0 0",
      //   top: "0",
      //   right: "0",
      //   width: "40px",
      //   height: "40px",
      //   boxSizing: "border-box",
      // },
      careerStatsGrid: {},
    },
    bio: {
      mb: 2,
      position: "relative",
      padding: "16px 40px 4px 16px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#e7e8f0",
      boxSizing: "border-box",
      backgroundColor: "#fff",
      borderRadius: "8px",
      width: {
        md: "unset",
        xs: "calc(100vw - 32px)",
      },
      "&:before": {
        content: '""',
        backgroundImage: `url(${WhiteNotch})`,
        backgroundColor: "#f7f8fb",
        backgroundPosition: "top right",
        position: "absolute",
        margin: "-2px -1px 0 0",
        top: "0",
        right: "0",
        width: "40px",
        height: "40px",
        boxSizing: "border-box",
      },
    },
    relatedItems: {
      width: {
        md: "unset",
        xs: "calc(100vw - 32px)",
      },
      overflowY: {
        xs: "auto",
        md: "unset",
      },
      relatedItemsBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "start",
        py: 2,
        width: {
          md: "100%",
          xs: "100%",
        },
        relatedItem: {
          width: "calc(100vw - 32px)",
          mr: 2,
        },
      },
      topCollectors: {
        height: "300px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        border: "1px solid #dfe0eb",
        borderRadius: "4px",
      },
      similarPlayers: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        borderRadius: "4px",
        card: {
          display: "flex",
          mb: 1,
          border: "1px solid #dfe0eb",
          width: "100%",
          borderRadius: "8px",
          playerImage: {
            width: "71px",
            height: "92px",
            backgroundImage: `url(${NoxxCardMetaBg})`,
            backgroundColor: "#46494c",
            backgroundPosition: "54px -75px",
            borderRadius: "0 0 8px 0",
          },
          playerMeta: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: 0,
            justifyContent: "center",
            name: {
              textAlign: "left",
              margin: "0",
              height: "24px",
              fontWeight: "bold",
              textIndent: "8px",
            },
            sub: {
              textAlign: "left",
              margin: "0",
              fontSize: "12px",
              height: "18px",
              color: "#b6b6b6",
              textIndent: "8px",
            },
          },
          stats: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: 0,
            justifyContent: "center",
            labels: {
              display: "flex",
              flexDirection: "row",
              height: "18px",
              padding: 0,
            },
            values: {
              display: "flex",
              flexDirection: "row",
              height: "18px",
              padding: 0,
            },
          },
        },
      },
    },
  },
  mobileDetail: {
    background: `url(${MobileBg})`,
    backgroundSize: '100% 100%',
    // border: "1px solid #dfe0eb",
    borderRadius: "8px 8px 0 0",
    ml: -2,
    mt: -1,
    zIndex: 10,
    position: "relative",
    padding: "16px",
    width: "100vw",
    h4: {
      fontWeight: "bold",
    },
    playerSubHeading: {
      display: "flex",
      color: "#000",
    },
  },
  statGridItem: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  mobileGridItem: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    py: '4px'
  },
  mobileGrid: {
    background: '#fff',
    border: "1px solid #dfe0eb",
    borderRadius: '8px',
    mt: 3
  },
  playerCardTable: {
    // width: "100vw",
    left: 0,
    margin: 0,
    mt: {xs: 8, md: -4}
    // ml: '-38px'
    // ml: {
    //   lg: -3,
    //   md: -3,
    //   sm: -9,
    //   xs: -2,
    // },
    // px: {
    //   md: 11,
    //   sm: 8,
    //   xs: 0,
    // },
  },
};

export default styles;
