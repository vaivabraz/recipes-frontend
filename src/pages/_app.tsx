import { useEffect, useState } from "react";
import GlobalStyles from "../ui/styles/global";
import { AppProvider } from "../store/context";
import { WithAxios } from "../services/axios";
import { AuthenticationService } from "../services";

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");

  useEffect(() => {
    async function fetchSession() {
      const { accessToken } = await AuthenticationService.refreshSession();
      if (accessToken) {
        setToken(accessToken);
      }
      setLoading(false);
    }
    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <AppProvider token={token}>
      <WithAxios>
        <GlobalStyles />
        <Component {...pageProps} />
      </WithAxios>
    </AppProvider>
  );
}
