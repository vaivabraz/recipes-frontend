import { useContext } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@mui/material";

import { PrivatePage } from "../ui";
import { Actions, AppContext } from "../store";
import { AuthenticationService } from "../services";

export default function Profile() {
  const { dispatch } = useContext(AppContext);
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = async () => {
    await AuthenticationService.logout();
    dispatch({ type: Actions.ResetAll });
    queryClient.clear();
    router.push("/login");
  };

  return (
    <PrivatePage withMenu>
      <Button variant="outlined" onClick={logout}>
        Atsijungti
      </Button>
    </PrivatePage>
  );
}
