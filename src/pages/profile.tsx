import { Layout, TextButton } from "../ui";
import { useContext } from "react";
import { Actions, AppContext } from "../store";
import { AuthenticationService } from "../services";

export default function Profile() {
  const { dispatch } = useContext(AppContext);

  const logout = async () => {
    dispatch({ type: Actions.AddToken, payload: { token: "" } });
    await AuthenticationService.logout();
  };

  return (
    <Layout>
      <TextButton text={"Atsijungti"} onClick={logout} />
    </Layout>
  );
}
