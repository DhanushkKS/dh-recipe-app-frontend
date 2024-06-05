export const useCategoryBar = () => {
  const activeButtonStyles = {
    backgroundColor: "#fe5e7f",
    color: "white", // Optional: to change the text color when selected
    "&:hover": {
      backgroundColor: "#fe5e7f !important",
    },
  };
  return { activeButtonStyles };
};
