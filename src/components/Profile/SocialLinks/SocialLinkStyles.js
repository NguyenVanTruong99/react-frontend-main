const styles = {
  linkBox: {
    padding: "5px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.2s ease-in-out",
      cursor: "pointer",
    },
  },
  icon: { display: "flex", alignItems: "center", height: "100%" },
};

export default styles;
