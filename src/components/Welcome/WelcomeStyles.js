import IdentityBg from "assets/images/backgrounds/stats.png";
// import IdentityBg from 'assets/images/backgrounds/identity.svg'
import MobileLicenseBg from "assets/images/backgrounds/mobileLicenseBg.png";
// import theme from "theme"
import WhiteRect from "assets/images/backgrounds/white-rect.png";
const styles = {
  container: {
    padding: theme => theme.spacing(0, 0, 0, 0),
    mt: { md: 0, xs: 1 },
  },
  roundedBlack: {
    height: { md: 280, xs: 240 },
    borderRadius: "18px",
    margin: theme => theme.spacing(2),
    padding: theme => theme.spacing(4),
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  justAdded: {
    position: "absolute",
    width: "100vw",
    top: 80,
    height: 65,
    left: 0,
    zIndex: "1",
    background: "#e0eeff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    // boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.1)',
  },
  shadowDivider: {
    width: "100vw",
    position: "absolute",
    left: 0,
    top: { md: 470, xs: 443 },
    boxShadow: "0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
    boxShadow: "0px 24px 38px 3px rgba(0, 0, 0, 0.14)",
    boxShadow: "0px 11px 15px -7px rgba(0, 0, 0, 0.2)",
  },
  licenseBar: {
    height: "220px",
    background: `url(${WhiteRect})`,
    backgroundSize: "100% 100%",
    width: "100vw",
    position: "absolute",
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  idbg: {
    background: `url(${IdentityBg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    mr: 5,
    minWidth: 600,
    // minHeight: '200px'
  },
  mobileLicense: {
    background: `url(${MobileLicenseBg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: 380,
    mx: "-20px",
  },
  addCards: {
    boxShadow: "0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
    boxShadow: "0px 24px 38px 3px rgba(0, 0, 0, 0.14)",
    boxShadow: "0px 11px 15px -7px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "18px",
    height: { md: 130, xs: 64 },
    width: { md: 110, xs: "372" },
    mx: { xs: "-20px", md: 0 },
    background: "white",
    display: "flex",
    flexDirection: { md: "column", xs: "row" },
    justifyContent: { md: "flex-start", xs: "center" },
    alignItems: { md: "center", xs: "center" },
    pt: { md: 1, xs: 0 },
  },
  square: {
    background: "#202020",
    boxShadow:
      "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "18px",
    height: { md: 80, xs: 65 },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  squareTall: {
    background: "#202020",
    boxShadow:
      "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "18px",
    height: { md: 80, xs: 85 },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default styles;
