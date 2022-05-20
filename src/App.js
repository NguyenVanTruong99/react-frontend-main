import { CurrentUserContext, CurrentUserProvider } from "contexts/CurrentUser";
import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import { Typography, useMediaQuery } from "@mui/material";
import { useContext, useEffect } from "react";

import AddCardCollection from "pages/AddCardCollection";
import AddCardDetails from "pages/AddCardDetails";
import AddCardInformation from "pages/AddCardInformation";
import { ApolloProvider } from "@apollo/client";
import AppBar from "./components/AppBar";
import AuthModal from "components/AuthModal";
import { BannerProvider } from "contexts/Banner";
import Box from "@mui/material/Box";
import CardDetail from "pages/CardDetail";
import { ConfirmProvider } from "material-ui-confirm";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Design from "pages/Design";
import EditProfile from "pages/EditProfile";
import Footer from "./components/Footer";
import Forgot from "components/User/Forgot";
import Home from "./pages/Home";
import { ImageUploaderProvider } from "contexts/ImageUploader";
import LogRocket from "logrocket";
import LoginModalDemo from "pages/LoginModalDemo";
import MatchUserCard from "pages/MatchUserCard";
import { ModalStateProvider } from "contexts/ModalState";
import MyCollection from "pages/MyCollection";
import NotFound from "pages/NotFound";
import OnboardingConfirmation from "components/Onboarding/Confirmation";
import OnboardingExperience from "components/Onboarding/Experience";
import OnboardingInterests from "components/Onboarding/Interests";
import OnboardingLayout from "components/Onboarding/Layout";
import OnboardingSplash from "components/Onboarding/Splash";
import PlayerDetail from "pages/PlayerDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Profile from "pages/Profile";
import ReactGA from "react-ga";
import Register from "components/User/Register";
import Reset from "components/User/Reset";
import RouteModal from "components/RouteModal";
import SearchResults from "pages/SearchResults";
import SessionCheck from "components/SessionCheck/SessionCheck";
import ShowcaseDetail from "pages/ShowcaseDetail";
import Showcases from "pages/Showcases";
import ShowcasesFollowing from "pages/ShowcasesFollowing";
import SignIn from "components/User/SignIn";
import { StagedUserCardsProvider } from "contexts/StagedUserCards";
import TermsOfService from "./pages/TermsOfService";
import { ThemeProvider } from "@mui/material/styles";
import UserCardDetail from "pages/UserCardDetail";
import UserCardEdit from "pages/UserCardEdit";
import UserProfile from "./pages/UserProfile";
import WantList from "pages/WantList";
import { hotjar } from "react-hotjar";
import theme from "./theme";
import useApolloClient from "./hooks/useApolloClient";

if (process.env.REACT_APP_LOG_ROCKET_APP_ID) {
  LogRocket.init(process.env.REACT_APP_LOG_ROCKET_APP_ID);
}

if (process.env.REACT_APP_LOG_ROCKET_APP_ID) {
  LogRocket.init(process.env.REACT_APP_LOG_ROCKET_APP_ID);
}

const GAID = process.env.GOOGLE_ANALYTICS_ID ?? "UA-220982994-1";

if (GAID) {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID ?? "UA-220982994-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const hjid = process.env.HJID ?? "2853310";
const hjsv = process.env.HJSV ?? "6";

const Layout = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        paddingTop: theme => theme.spacing(8),
        background: theme => theme.palette.background.main,
        position: "relative",
        minHeight: "100vh",
        overflowY: "hidden",
      }}
    >
      <AppBar />
      <BannerProvider>
        <Container
          // disableGutters={isFullWidth}
          maxWidth={false}
          // sx={{ px: { md: "auto", xs: 0.5 } }}
        >
          <Outlet />
        </Container>
        <Box
          sx={{
            p: !isMobile && window.location.pathname !== "/add-cards" ? 10 : 1,
          }}
        />
        {!isMobile && window.location.pathname !== "/add-cards" ? (
          <Footer />
        ) : (
          <></>
        )}
        {/* {isMobile &&
          (window.location.pathname !== '/') &&
          (window.location.pathname !== '/add-cards') &&
          (window.location.pathname !== '/my-showcases') &&  
          (!window.location.pathname.startsWith('/showcases/'))
          ?
          <Footer />
          :
          <></>
        } */}
      </BannerProvider>
    </Box>
  );
};

const AppRouter = () => (
  <Router>
    <App />
  </Router>
);

const InnerApp = () => {
  const client = useApolloClient();
  const navigate = useNavigate();
  const location = useLocation();
  // const state = location.state;
  const { currentUser, isOnboarded } = useContext(CurrentUserContext);

  if (
    !!currentUser &&
    !isOnboarded &&
    !location.pathname.startsWith("/onboarding")
  ) {
    navigate("/onboarding");
  }

  useEffect(() => {
    if (hjid && hjsv) {
      hotjar.initialize(hjid, hjsv);
    }
  }, []);

  const PrivateRoute = ({ Component }) => {
    if (!!currentUser) {
      return Component;
    } else {
      return <Navigate to="/sign-in" />;
    }
  };

  return (
    <ApolloProvider client={client}>

      {/* // Remove session check for now
      <SessionCheck /> */}
      
      <CssBaseline />
      <Routes
      // location={state?.backgroundLocation || location}
      >
        <Route
          path="onboarding"
          element={
            <OnboardingLayout>
              <Outlet />
            </OnboardingLayout>
          }
        >
          <Route index element={<OnboardingSplash />} />
          <Route path="experience" element={<OnboardingExperience />} />
          <Route path="interests" element={<OnboardingInterests />} />
          <Route path="confirmation" element={<OnboardingConfirmation />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="login-modal" element={<LoginModalDemo />} />
          <Route path="my-collection" element={<MyCollection />} />
          <Route path="my-showcases" element={<Showcases />} />
          <Route path="following-showcases" element={<ShowcasesFollowing />} />
          <Route path="my-want-list" element={<WantList />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="showcases/:id" element={<ShowcaseDetail />} />
          <Route
            path="showcases/:id/edit"
            element={<Typography>Showcases Edit TODO</Typography>}
          />
          <Route path="users/:id" element={<UserProfile />} />
          <Route
            path="design"
            element={<PrivateRoute Component={<Design />} />}
          />
          <Route
            path="profile"
            element={<PrivateRoute Component={<Profile />} />}
          />
          <Route
            path="collectors-cards/:id"
            element={<UserCardDetail />}
          />
          <Route
            path="collectors-cards/:id/edit"
            element={<PrivateRoute Component={<UserCardEdit />} />}
          />
          <Route
            path="cards/:id"
            element={<CardDetail />}
          />
          <Route
            path="players/:id"
            element={<PlayerDetail />}
          />
          <Route path="search" element={<SearchResults />} />
          <Route
            path="sign-in"
            element={
              <AuthModal>
                <Outlet />
              </AuthModal>
            }
          >
            <Route index element={<SignIn />} />
          </Route>
          <Route
            path="register"
            element={
              <AuthModal>
                <Outlet />
              </AuthModal>
            }
          >
            <Route index element={<Register />} />
          </Route>
          <Route
            path="forgot-password"
            element={
              <AuthModal>
                <Outlet />
              </AuthModal>
            }
          >
            <Route index element={<Forgot />} />
          </Route>
          <Route
            path="reset-password/:token"
            element={
              <AuthModal>
                <Outlet />
              </AuthModal>
            }
          >
            <Route index element={<Reset />} />
          </Route>
          <Route
            path="add-cards"
            element={
              <RouteModal>
                <Outlet />
              </RouteModal>
            }
          >
            <Route index element={<PrivateRoute Component={<AddCardInformation />} />} />
            <Route path={`:userCardId/details`} element={<AddCardDetails />} />
            <Route path="collection" element={<AddCardCollection />} />
            <Route path=":id/match" element={<MatchUserCard />} />
          </Route>
          <Route path="showcases/:id" element={<ShowcaseDetail />} />
          {/* custom route for djskee */}
          <Route
            path="djskee/project70"
            element={
              <ShowcaseDetail
                customShowcaseId={"6cb255c7-7dca-460a-b122-d292e1daf59a"}
              />
            }
          />
        </Route>
      </Routes>
    </ApolloProvider>
  );
};

const App = () => {
  return (
    <CurrentUserProvider>
      <StagedUserCardsProvider>
        <ThemeProvider theme={theme}>
          <ConfirmProvider>
            <ImageUploaderProvider>
              <ModalStateProvider>
                <InnerApp />
              </ModalStateProvider>
            </ImageUploaderProvider>
          </ConfirmProvider>
        </ThemeProvider>
      </StagedUserCardsProvider>
    </CurrentUserProvider>
  );
};

export default AppRouter;
