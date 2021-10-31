import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Page, { PageProps } from "./Page";
import { Actions, AppContext } from "../../../store";
import { UserService } from "../../../services";

const PrivatePage: React.FC<PageProps> = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    async function fetchMe() {
      const response = await UserService.getCurrentUser();
      if (response?.username) {
        dispatch({
          type: Actions.AddUsername,
          payload: { username: response.username },
        });
      } else {
        router.push("/login");
      }
      setLoading(false);
    }

    if (!state.user.username) {
      setLoading(true);
      fetchMe();
    }
  }, []);

  if (!loading && state.user.username) {
    return <Page {...props}></Page>;
  }
  return <div>loading</div>;
};
export default PrivatePage;
