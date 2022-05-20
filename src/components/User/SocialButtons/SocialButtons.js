import "./socialButtons.css";

import {
  GoogleAPI,
  GoogleLogin,
  googleGetBasicProfil,
} from "react-google-oauth";

import { Box } from "@mui/system";
import FacebookLogin from "react-facebook-login";

const SocialButtons = ({ onFacebookLogin, onGoogleLogin }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "space-evenly",
      justifyContent: "space-evenly",
      marginTop: theme => theme.spacing(2),
      width: "100%",
    }}
  >
    <Box>
      <GoogleAPI
        className="GoogleLogin"
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onUpdateSigninStatus={response => {
          // not sure what this does
        }}
        onInitFailure={err => console.error(err)}
        cookiePolicy="single_host_origin"
        uxMode="popup"
      >
        <GoogleLogin
          className="btn-google"
          access="offline"
          backgroundColor="white"
          text="&nbsp;GOOGLE"
          onLoginSuccess={res => {
            const profile = googleGetBasicProfil();

            if (profile.email) {
              onGoogleLogin({
                uid: profile.id,
                email: profile.email,
                imageUrl: profile.imageUrl,
                firstName: profile.givenName,
                lastName: profile.familyName,
              });
            }
          }}
          responseType="code"
          scope="email profile"
          width="100%"
        />
      </GoogleAPI>
    </Box>
    <Box>
      <FacebookLogin
        // cssClass="facebook-button"
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={false}
        callback={response => {
          const data = {
            provider: "facebook",
            uid: response.userID,
            accessToken: response.accessToken,
            signedRequest: response.signedRequest,
            email: response.email,
          };

          // we have a token and a signed request, send it off to authenticate
          // the user with our graphql api.
          if (data.signedRequest && data.accessToken) {
            onFacebookLogin(data);
          } else {
            // facebook login didn't work, do something useful!
          }
        }}
        fields="email"
        textButton="&nbsp;Facebook"
      />
    </Box>
  </Box>
);

export default SocialButtons;
