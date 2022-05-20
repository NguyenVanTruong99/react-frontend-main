// import { css } from '@emotion/react';

// const styles = {
//   caption: css`
//     color: pink
//   `
// }

// export default styles;

const styles = {
  splashBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginX: {
      xs: 2,
      lg: 24,
    },
    marginTop: 16,
    padding: {
      xs: 2,
      lg: 10,
    },
    borderRadius: theme => theme.shape.borderRadius,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "grey.B200",
  },
  bottomBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 6,
    marginX: {
      xs: 0,
      lg: 24,
    },
  },
};

export default styles;
