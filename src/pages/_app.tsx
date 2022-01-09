import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";

import GlobalStyles from "../ui/styles/global";
import { AppProvider } from "../store/context";
import { WithAxios } from "../services/axios";
import { muiTheme } from "../utils";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
          },
        },
      })
  );

  return (
    <AppProvider>
      <WithAxios>
        <GlobalStyles />
        <ThemeProvider theme={muiTheme}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeProvider>
      </WithAxios>
    </AppProvider>
  );
}
