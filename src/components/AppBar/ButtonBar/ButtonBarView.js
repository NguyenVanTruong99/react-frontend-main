import { Box, Button } from "@mui/material";

import AddCardIcon from "assets/images/add_card.svg";
import { Link } from "react-router-dom";
import styles from "./ButtonBarStyles";

const ButtonBarView = ({ currentUser, isMobile, theme, signOut }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "flex-end",
    }}
  >
    {!!currentUser ? (
      isMobile ? (
        <>
          <Link
            to="/add-cards"
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
            }}
          >
            <Button
              size={isMobile ? "medium" : "large"}
              variant="outlinedBlack"
              color="white"
              sx={isMobile ? styles.button.mobile : styles.button}
            >
              <img
                src={AddCardIcon}
                style={{ height: "20px", marginRight: "2px" }}
                alt=""
              />
              &nbsp;Add
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Box>
            <Button
              size={isMobile ? "medium" : "large"}
              variant="containedBlack"
              color="white"
              sx={isMobile ? styles.button.mobile : styles.button}
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </Box>
        </>
      )
    ) : (
      <>
        <Link
          to="/sign-in"
          style={{ textDecoration: "none", color: theme.palette.text.primary }}
        >
          <Button
            size={isMobile ? "medium" : "large"}
            sx={isMobile ? styles.button.mobile : styles.button}
            variant="outlinedBlack"
            color="white"
          >
            Sign In
          </Button>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
            size={isMobile ? "medium" : "large"}
            sx={isMobile ? styles.button.mobile : styles.button}
            variant="containedBlack"
            color="white"
          >
            Sign Up
          </Button>
        </Link>
      </>
    )}
  </Box>
);

export default ButtonBarView;
