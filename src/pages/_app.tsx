import GlobalStyles from "../ui/styles/global";
import { AppProvider } from "../contextStore/context";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppProvider>
  );
}
