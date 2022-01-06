import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#7D4F50",
    },
    secondary: {
      main: "#7D4F50",
    },
  },
  typography: {
    allVariants: {
      letterSpacing: "0.1em",
    },
    h1: {
      fontSize: "39.06px",
    },
    h2: {
      fontSize: "31.25px",
    },
    h3: {
      fontSize: 25,
    },
    h4: {
      fontSize: "20px",
    },
    h5: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    h6: {
      fontSize: "24px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#ffffff33",
        },
      },
    },
  },
});
