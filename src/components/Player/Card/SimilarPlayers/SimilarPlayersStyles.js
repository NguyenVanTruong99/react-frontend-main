import NoxxBg from "assets/images/Bg-large-pattern.png";
import NoxxCardMetaBg from "assets/images/badge_item_1.svg";
import NoxxCardMetaBgSecond from "assets/images/player_card_second.svg";
import WhiteNotch from "assets/images/Bg-notch-top-right-cut.png";

const styles = {
  cardSuggestion: {
    border: "1px solid #ddd",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "row",
    margin: "0.5em 0",
  },
  cardImgBox: {
    width: "20%",
    paddingRight: "10px",
    paddingLeft: "10px",
    overflow: "hidden",
  },
  cardData: {
    flex: "1",
    p: {
      lineHeight: "1.1em",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  playerDetailRoot: {
    pt: 2,
    // width: {
    //   xs: "calc(100vw - 16px)",
    //   md: "1200px",
    // },
    margin: "0 auto",
    header: {
      height: {
        xs: "180px",
        md: "265px",
      },
      backgroundImage: {
        xs: `url(${NoxxBg})`,
        md: `unset`,
      },
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
        md: "unset",
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
        img: {
          position: "absolute",
          bottom: "-10px",
          height: "100%",
          right: "10vw",
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
        md: "24px auto",
        xs: "24px 0",
      },
      position: "relative",
      padding: "0",
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
          xs: "calc(300vw - 96px)",
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
};

export default styles;
