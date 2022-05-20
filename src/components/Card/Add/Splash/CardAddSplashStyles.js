// import { css } from '@emotion/react';

// const styles = {
//   caption: css`
//     color: pink
//   `
// }

// export default styles;

const styles = {
  button: {
    large: {
      color: "#258AFF",
      backgroundColor: "#FFFFFF",
      fontSize: { md: 14, xs: 17 },
      fontWeight: { md: 600, xs: 400 },
      width: { md: "240px", xs: "275px" },
      height: { md: "130px", xs: "54px" },
      display: "flex",
      flexDirection: { md: "column", xs: "row" },
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      mx: { md: "8px", xs: 0 },
      mb: { md: 0, xs: "8px" },
      borderRadius: { md: "16px", xs: "4px" },
    },
  },
  icons: {
    height: "100%",
    m: 0,
  },
  iconBox: {
    height: { md: "31.33px", xs: "20px" },
    mb: { md: "12px", xs: "0px" },
    mr: { md: "0px", xs: "6px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default styles;
