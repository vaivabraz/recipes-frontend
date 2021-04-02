import { useContext } from "react";
import { useRouter } from "next/router";
import { Layout, TextButton } from "../ui";
import { Actions, AppContext } from "../store";
import { AuthenticationService } from "../services";

export default function Profile() {
  const { dispatch } = useContext(AppContext);
  const router = useRouter();

  const logout = async () => {
    await AuthenticationService.logout();
    dispatch({ type: Actions.ResetAll });
    router.push("/login");
  };

  return (
    <Layout>
      <TextButton text={"Atsijungti"} onClick={logout} />
    </Layout>
  );
}
