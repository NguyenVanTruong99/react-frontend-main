import { Box, Button, Grid, Typography } from "@mui/material";

import AuthNav from "components/AuthModal/AuthNav";
import LoadingGif from "assets/images/loading3.gif";
import Logo from 'assets/images/logos/Logo4x.png'
import Modal from "@mui/material/Modal";
import Register from 'components/User/Register';
import SignIn from 'components/User/SignIn';
import styles from "./LoginModalStyles";
import theme from "theme.js"

const LoginModalView = ({
  open,
  handleClose,
  selected,
  setSelected,
  redirectTo,
  displayLogin
}) => displayLogin ? (
  <>
    <Modal open={!!open} onClose={handleClose}>
      <Box sx={styles.Container}>
        <Box>
          <Box sx={styles.authNav.container}>
            <Box
              sx={
                selected === "sign-in"
                  ? styles.authNav.tabs.selected
                  : styles.authNav.tabs.other
              }
              onClick={() => setSelected("sign-in")}
            >
              <Box py={1} mr={1}>
                <Typography variant="cardLg">Sign In</Typography>
              </Box>
            </Box>
            <Box
              sx={
                selected === "register"
                  ? styles.authNav.tabs.selected
                  : styles.authNav.tabs.other
              }
              onClick={() => setSelected("register")}
            >
              <Box py={1}>
                <Typography variant="cardLg">Sign Up</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {selected === "sign-in" &&
          <SignIn isModal redirectTo={redirectTo} />
        }
        {selected === "register" &&
          <Register isModal redirectTo={redirectTo} />
        }
      </Box>
    </Modal>
  </>
) :
    (
      <>
        <Modal open={!!open} onClose={handleClose}>
          <Box sx={styles.Container}>
            <Box sx={styles.Top}>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", py: 2, textAlign: 'center' }}>
              <img src={Logo} alt="logo" style={{ width: '50px', marginTop: 8 }} />
              <Typography variant="modalLg" sx={{mt: 2}}>Coming Soon to NoXX!</Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleClose}>Great!</Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </>
    );

export default LoginModalView;
