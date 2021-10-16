import GlobalStyles from "../ui/styles/global";
import { AppProvider } from "../store/context";
import { WithAxios } from "../services/axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function MyApp({ Component, pageProps }) {
  const theme = createTheme({
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
        // fontWeight: "lighter",
      },
    },
  });

  return (
    <AppProvider>
      <WithAxios>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </WithAxios>
    </AppProvider>
  );
}
