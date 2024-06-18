import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {},
    },
  },
  palette: {
    primary: {
      main: "#fe5e7f",
      50: colors.pink[50],
    },
  },
});
