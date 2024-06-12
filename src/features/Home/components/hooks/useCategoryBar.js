import { colors } from "@mui/material";

export const useCategoryBar = () => {
  const activeButtonStyles = {
    backgroundColor: "primary.main",
    color: "primary.50",
    "&:hover": {
      color: "primary.main",
      backgroundColor: "primary.50",
    },
  };
  return { activeButtonStyles };
};
