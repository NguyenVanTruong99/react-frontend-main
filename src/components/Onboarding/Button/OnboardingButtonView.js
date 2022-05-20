import { Button } from "@mui/material";

const OnboardingButtonView = ({ onClick, children, selected, sx }) => (
  <Button
    sx={{
      marginBottom: {
        xs: 5,
      },
      ...sx,
    }}
    variant={selected ? "contained" : "outlined"}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default OnboardingButtonView;
