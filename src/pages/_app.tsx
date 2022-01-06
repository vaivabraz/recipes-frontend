import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import GlobalStyles from "../ui/styles/global";
import { AppProvider } from "../store/context";
import { WithAxios } from "../services/axios";

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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <AppProvider>
      <WithAxios>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeProvider>
      </WithAxios>
    </AppProvider>
  );
}
