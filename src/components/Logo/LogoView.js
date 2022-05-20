import LogoBlack from "assets/images/noxx-nav-logo.png";
import LogoWhite from "assets/images/noxx-footer-logo.png";

const LogoView = ({ color = "black", sx = {} }) => (
  <img src={color === "white" ? LogoWhite : LogoBlack} alt="NoXX" />
);

export default LogoView;
