import { Box, Divider, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import styles from "./AppBarStyles.js";
import theme from "theme.js";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const BarLinks = () => {
  const { pathname } = useLocation();
  const links = [
    { name: "My Collection", path: "/my-collection" },
    { name: "Showcases", path: "/my-showcases" },
    { name: "Want List", path: "/my-want-list" },
    { name: "Add Cards", path: "/add-cards" },
  ];

  const isSm = useMediaQuery(theme.breakpoints.down("mdLg"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  const variantEx = () => {
    if (isSm) {
      return "Sm";
    } else if (isMd) {
      return "Md";
    } else {
      return "";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div style={styles.nav}>
        {links.map((link, i) => (
          <Box sx={styles.nav.box} key={i}>
            {/* <Box sx={styles.nav.spacer} key={link.name + 'spacer'}></Box> */}
            <Link
              key={link.name}
              style={
                pathname === link.path
                  ? styles.nav.item.active
                  : styles.nav.item
              }
              to={link.path}
            >
              <Typography
                variant={
                  pathname === link.path
                    ? "navLinkActive" + variantEx()
                    : "navLinkGrey" + variantEx()
                }
              >
                {link.name}
              </Typography>
            </Link>
            {i !== links.length - 1 && (
              <Divider
                sx={{
                  my: 1.75,
                }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
            )}
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default BarLinks;
