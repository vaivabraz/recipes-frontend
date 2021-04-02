import GlobalStyles from "../ui/styles/global";
import { AppProvider } from "../store/context";
import { WithAxios } from "../services/axios";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <WithAxios>
        <GlobalStyles />
        <Component {...pageProps} />
      </WithAxios>
    </AppProvider>
  );
}
