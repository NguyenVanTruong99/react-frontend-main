import { Box, Button } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import styles from "./AuthModalStyles";
import theme from "theme.js";

const AuthNav = ({ selected }) => (
  <Box sx={styles.authNav.container}>
    <Button
      variant="text"
      sx={
        selected === "/sign-in"
          ? styles.authNav.tabs.selected
          : styles.authNav.tabs.other
      }
    >
      <Link
        style={{ textDecoration: "none", color: theme.palette.text.primary }}
        to="/sign-in"
      >
        Sign In
      </Link>
    </Button>
    <Button
      variant="text"
      sx={
        selected === "/register"
          ? styles.authNav.tabs.selected
          : styles.authNav.tabs.other
      }
    >
      <Link
        style={{ textDecoration: "none", color: theme.palette.text.primary }}
        to="/register"
      >
        Sign Up
      </Link>
    </Button>
  </Box>
);

export default AuthNav;
