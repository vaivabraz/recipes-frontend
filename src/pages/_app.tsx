import GlobalStyles from "../ui/styles/global";
import { AppProvider } from "../store/context";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppProvider>
  );
}
