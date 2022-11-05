import { useState } from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@mui/material/styles";

import GlobalStyles from "../ui/styles/global";
import { AppProvider } from "../store/context";
import { WithAxios } from "../services/axios";
import { muiTheme } from "../utils";

export default function MyApp({ Component, pageProps }: AppProps) {
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
    <SessionProvider session={pageProps.session}>
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
    </SessionProvider>
  );
}
