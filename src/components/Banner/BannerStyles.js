import NoxxPattern from "assets/images/noxx-bg-pattern.png";

const styles = {
  background: `url(${NoxxPattern})`,
  backgroundColor: theme => theme.palette.background.black,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme => theme.spacing(5, 4, 4, 0),
  clipPath: `
    polygon(
      0% 0,                 /* top left */
      0 0%,                 /* top left */
      0% 0,    /* top right */
      100% 0,               /* top right */
      100% 0,  /* bottom right */
      100% 100%,  /* bottom right */
      48px 100%,               /* bottom left */
      0 calc(100% - 48px)      /* bottom left */
    );
  `,
  borderRadius: 2,
  marginBottom: theme => theme.spacing(4),
};

export default styles;
