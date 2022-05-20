import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// import Inter from "./assets/fonts/Inter-Light.ttf";
import TTInterfacesWoff2 from "./assets/fonts/TTInterfaces-Regular.woff2";

const defaultTheme = createTheme();

const primaryColor = "#258aff";
const textPrimary = "#010101";
const h6 = {
  ...defaultTheme.typography.h6,
  fontSize: 18,
  fontFamily: "Inter",
};
const subtitle1 = {
  ...defaultTheme.typography.subtitle1,
  lineHeight: 1,
  fontFamily: "Inter",
};

const theme = createTheme({
  typography: {
    color: "#010101", 
    fontFamily: "Inter",
    fontSize: 15,
    h1: { fontSize: 70 },
    h2: { fontSize: 50 },
    h3: { fontSize: 36 },
    h4: { fontSize: 24 },
    h5: { fontSize: 18 },
    h6,
    subtitle1,
    xxs: { fontSize: 10 },
    xs: { fontSize: 12 },
    small: { fontSize: 14 },
    smMd: { fontSize: 18 },
    xsmd: { fontSize: 18 },
    medium: { fontSize: 24, display: "block" },
    medium2: {
      fontSize: 18,
      fontWeight: 600,
      color: "white",
    },
    greySm: {
      color: "#9FA2B4",
      fontSize: 13,
      display: "block",
    },
    greySmMd: {
      color: "#9FA2B4",
      fontSize: 18,
      display: "block",
    },
    medium3: {
      color: "#9FA2B4",
      fontSize: 18,
    },
    greyMd: {
      color: "#9FA2B4",
      fontSize: 24,
    },
    greyLg: {
      color: "#9FA2B4",
      fontSize: 24,
      display: "block",
    },
    mdLg: {
      color: "#010101",
      fontSize: 36,
      fontWeight: 600,
    },
    large: { fontSize: 50, fontWeight: 600 },
    cardGreyXs: {
      color: "#9FA2B4",
      fontSize: 8,
    },
    cardGreySm: {
      color: "#9FA2B4",
      fontSize: 12,
    },
    cardGreyMd: {
      color: "#9FA2B4",
      fontSize: 14,
    },
    cardMdBold: {
      fontSize: 14,
      fontWeight: 600,
    },
    cardWhiteMd: {
      color: "white",
      fontSize: 14,
      fontWeight: 600,
    },
    cardGreyLg: {
      color: "#9FA2B4",
      fontSize: 15,
    },
    cardGreyXl: {
      color: "#9FA2B4",
      fontSize: 17,
    },
    cardSm: {
      fontSize: 10,
    },
    cardMdSm: {
      color: "#010101",
      fontSize: 13,
    },
    cardMd: {
      color: "#010101",
      fontSize: 15,
    },
    cardLg: {
      color: "#010101",
      fontSize: 15,
      fontWeight: "bold",
      display: "block",
      whiteSpace: "nowrap",
    },
    cardXl: {
      color: "#010101",
      fontSize: 36,
      fontWeight: "bold",
      display: "block",
    },
    statXl: {
      color: "#010101",
      fontSize: 28,
      fontWeight: 500,
      display: "block",
    },
    cardXlBlue: {
      color: primaryColor,
      fontSize: 36,
      fontWeight: "bold",
      display: "block",
    },
    cardDetailXs: {
      color: "#9FA2B4",
      fontSize: 15,
      fontWeight: 400,
      display: "block",
    },
    cardDetailXsBold: {
      fontSize: 15,
      fontWeight: 600,
    },
    cardDetailSm: {
      color: "#010101",
      fontSize: 22,
      lineHeight: "28px",
      fontWeight: 600,
    },
    cardDetailXsGrey: {
      display: "block",
      color: "#9FA2B4",
      fontSize: 18,
      lineHeight: "28px",
      fontWeight: 400,
    },
    cardDetailSmGrey: {
      display: "block",
      color: "#9FA2B4",
      fontSize: 22,
      lineHeight: "28px",
      fontWeight: 400,
    },
    cardDetailMd: {
      color: "#010101",
      fontSize: 24,
      lineHeight: "30px",
      fontWeight: 400,
    },
    navLinkGrey: {
      color: "#9FA2B4",
      fontSize: 15,
    },
    navLinkActive: {
      color: "#010101",
      fontSize: 15,
      fontWeight: "bold",
      display: "block",
      whiteSpace: "nowrap",
    },
    navLinkGreyMd: {
      color: "#9FA2B4",
      fontSize: 15,
    },
    navLinkActiveMd: {
      color: "#010101",
      fontSize: 15,
      fontWeight: "bold",
      display: "block",
      whiteSpace: "nowrap",
    },
    navLinkGreySm: {
      color: "#9FA2B4",
      fontSize: 13,
    },
    navLinkActiveSm: {
      color: "#010101",
      fontSize: 13,
      fontWeight: "bold",
      display: "block",
      whiteSpace: "nowrap",
    },
    CardDetailSmMd: {
      color: "#010101",
      fontSize: 22,
      lineHeight: "30px",
      fontWeight: 400,
    },
    cardDetailXmd: {
      color: "#010101",
      fontWeight: 400,
      fontSize: 32,
    },
    cardDetailLg: {
      color: "#010101",
      fontSize: 48,
      fontWeight: 600,
      display: "block",
    },
    cardDetailMdLg: {
      color: "#010101",
      fontSize: 36,
      fontWeight: 600,
      display: "block",
    },
    wantListMd: {
      color: "#010101",
      fontSize: 24,
      fontWeight: 600,
      display: "block",
    },
    displayName: {
      color: "#010101",
      fontWeight: 500,
      fontSize: 24,
      textAlign: "left",
      display: "block",
    },
    displayNameLg: {
      color: "#010101",
      fontWeight: 500,
      fontSize: 32,
      textAlign: "left",
      display: "block",
    },
    displayNameSm: {
      color: "#010101",
      fontWeight: 500,
      fontSize: 20,
      textAlign: "left",
      display: "block",
    },
    displayNameWhite: {
      fontSize: 24,
      textAlign: "left",
      color: "white",
    },
    addGreySm: {
      textAlign: "center",
      display: "inline-block",
      color: "#A4A4A4",
      fontSize: 15,
    },
    addGreyMd: {
      textAlign: "center",
      color: "#A4A4A4",
      fontSize: 20,
    },
    addSmMd: {
      fontSize: 18,
      fontWeight: 400,
      display: "block",
    },
    addSm: {
      fontSize: 15,
      fontWeight: 500,
    },
    addMd: {
      fontSize: 18,
      fontWeight: 600,
    },
    addLg: {
      fontSize: 24,
      fontWeight: 400,
      display: "block",
    },
    addSmall: {
      fontSize: 18,
      fontWeight: 400,
      display: "block",
    },
    placeholder: {
      color: "#A0A2AD",
      fontWeight: 500,
    },
    placeholderSm: {
      color: "#A0A2AD",
      // fontSize: 12,
      fontWeight: 500,
    },
    whiteSm: {
      color: "#fff",
      fontSize: 12,
    },
    whiteButtonMd: {
      color: "#fff",
      fontSize: 15,
      fontWeight: 500,
    },
    blackButtonMd: {
      color: "black",
      fontSize: 15,
      fontWeight: 500,
    },
    chartGrey: {
      color: "#757470",
      fontSize: 15,
    },
    comingSoon: {
      fontWeight: "600",
      color: "#76BD7A",
      height: "30px",
    },
    md: {
      fontSize: 13,
      fontWeight: 500,
    },
    lg: {
      fontSize: 22,
    },
    showcaseSm: {
      fontSize: 18,
      display: "block",
    },
    showcaseMd: {
      fontSize: 22,
      fontWeight: 500,
      display: "block",
    },
    showcaseLg: {
      fontSize: 48,
      fontWeight: 600,
      display: "block",
    },
    modalLg: {
      fontSize: 24,
      fontWeight: 600,
      display: "block",
    },
    playerMd: {
      fontSize: 28,
      fontWeight: 700,
      display: "block",
    },
    playerSm: {
      fontSize: 15,
      color: "white",
      fontWeight: 500,
      display: "block",
    },
    playerStatWhite: {
      fontSize: 22,
      color: "white",
    },
    divider: {
      color: "#dfdfdf",
      fontSize: 12,
      fontWeight: 300,
    },
    playerLg: {
      fontSize: 50,
      color: "white",
      fontWeight: 600,
      display: "block",
    },
    pop: {
      fontSize: 15,
      fontWeight: 500,
      color: "#A4A4A4",
      display: "block",
    },
    comp: {
      fontSize: 22,
      fontWeight: 500,
      display: "block",
    },
    bodyDekSm: {
      fontSize: 10,
      color: primaryColor,
      display: "block",
    },
    jumboMd: {
      fontSize: 32,
      fontWeight: 600,
      display: "block",
    },
    chart: {
      fontSize: 15,
      fontWeight: 400,
      display: "block",
    },
    totalCards: {
      fontSize: 24,
      fontWeight: 600,
      display: "block",
    },
    playerBio: {
      color: "#9c9eb2",
      fontSize: 15,
    },
    blackXs: {
      color: "#010101",
      fontSize: 12,
    },
    noData: {
      color: "#757470",
      fontSize: 15,
    },
    welcomeWhiteMd: {
      color: "#F7F8FB",
      fontSize: 14,
      fontWeight: 600,
      display: "block",
    },
    welcomeWhiteLg: {
      color: "#F7F8FB",
      fontSize: 18,
      fontWeight: 600,
      display: "block",
    },
    welcomeWhiteXl: {
      color: "#F7F8FB",
      fontSize: 32,
      fontWeight: 600,
      display: "block",
    },
    welcomeHeader: {
      color: "black",
      display: "block",
      fontSize: 17,
      fontWeight: 400,
    },
    welcomePrimaryXl: {
      color: primaryColor,
      fontSize: 36,
      fontWeight: 600,
      display: "block",
    },
    welcomeBlackMd: {
      color: "black",
      fontSize: 18,
      fontWeight: 600,
      display: "block",
    },
    budgetSm: {
      color: "black",
      fontSize: 18,
      fontWeight: 500,
    },
    budget: {
      color: "black",
      fontSize: 22,
      fontWeight: 500,
    },
    error: {
      color: "#FF5252",
      display: "block",
      fontWeight: 500,
    },
    welcomeGreySm: {
      color: "#9E9E9E",
      fontSize: 14,
      display: "block",
    },
    link: {
      color: primaryColor,
      textDecoration: "underline",
    },
    welcomeNormal: {
      color: primaryColor,
      fontSize: 19,
    },
    beta: {
      fontSize: 12,
      display: "block",
      color: "#757575",
    },
    playerStatTop: {
      fontSize: 15,
      fontWeight: 400,
      color: "#757575",
    },
    playerStatBottom: {
      fontWeight: 700,
      fontSize: 20,
      color: "white",
    },
    playerStatTopMobile: {
      fontSize: 20,
      fontWeight: 400,
      color: "#9FA2B4",
    },
    playerStatBottomMobile: {
      fontWeight: 500,
      fontSize: 20,
      color: "black",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdLg: 1060,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    sports: {
      all: primaryColor,
      "my collection": primaryColor,
      basketball: "#1f8e9b",
      football: "#39c1cb",
      baseball: "#2c475c",
      hockey: "#f5a837",
      soccer: "#e85c43",
    },
    badges: {
      raw: "#dfdfde",
      psa: "#DA4C3F",
      bgs: "#438ACF",
      sgc: "#000",
    },
    disabled: {
      main: "rgba(0, 0, 0, 0.26)",
    },
    text: {
      primary: textPrimary,
      secondary: "",
      white: "#ffffff",
      grey: "#282C34",
      greyAlt: "#dfdfdf",
      blackAlt: "#11263C",
      gold: "#A09367",
    },
    background: {
      main: "#F7F8FB",
      white: "#ffffff",
      black: "#010101",
      blackAlt: "#232323",
      alt: "#9fa2b4",
      grey: "#f7f8fc",
      greyAlt: "#c4c4c4",
      button: "#eceff3",
      blue: "#438ACF",
      red: "#b70101",
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: "#010101",
      // dark: "#1f8e9b"
    },
    white: {
      main: "#ffffff",
      // dark: '#ffffff'
    },
    whiteAlt: {
      main: "#fdfdfd",
    },
    blue: {
      main: primaryColor,
      // dark: primaryColor,
    },
    warning: {
      main: "#f5a837",
      // dark: "#e85c43"
    },
    info: {
      main: "#2c475c",
    },
    success: {
      main: "#07c531",
    },
    error: {
      main: "#c8102e",
    },
    grey: {
      main: "#dfdfdf",
      B100: "#f7f8fc",
      B200: "#9fa2b4",
      B300: "#f4f4f4",
      B400: "#dfdfde",
      B500: "#757470",
      B600: "#9c9eb2",
      B700: "#9c9eb2",
      B800: "#dcdcdc",
      B900: "#dfe0eb",
    },
    accents: {
      orange: "orange",
      green: "#76BD7A",
      money: "#118C4F",
      red: "#CC0000",
      blue: "#2ea7f0",
      teal: "#39C1CC",
    },
  },
  NoxxButton: {
    background: primaryColor,
    borderColor: primaryColor,
  },
  components: {
    MuiListSubheader: {
      variants: [
        {
          props: { variant: "profile" },
          style: {
            ...h6,
            color: textPrimary,
          },
        },
      ],
    },
    MuiList: {
      variants: [
        {
          props: { variant: "profile" },
          style: {
            background: defaultTheme.palette.background.paper,
            paddingTop: 16,
            paddingBottom: 24,
            paddingLeft: 16,
            paddingRight: 16,
          },
          styleOverrides: {
            subheader: {
              border: "1px solid #dfdfde",
            },
          },
        },
      ],
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          boxShadow: "none",
          gap: 4,
        },
        indicatorSpan: {
          backgroundColor: primaryColor,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "bold",
        },
        outlined: {
          borderColor: primaryColor,
          color: primaryColor,
        },
        outlinedBlack: {
          border: "1px solid black",
          color: "black",
        },
        contained: {
          background: primaryColor,
          borderColor: primaryColor,
          color: "white",
          boxShadow: "none",
          "&.Mui-disabled": {
            background: "#258aff30",
            color: "white",
          },
        },
        containedBlack: {
          background: "#000",
          borderColor: "#000",
          color: "white",
          boxShadow: "none",
          border: "1px solid black",
          "&.Mui-disabled": {
            opacity: 0.5,
            color: "white",
          },
          "&:hover": {
            color: "black",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'TTInterfaces';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('TTInterfaces'), local('TTInterfaces-Regular'), url(${TTInterfacesWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
      `,
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "4px",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          border: "1px solid #dfdfde",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: "inherit",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: "0",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
// export default theme;
