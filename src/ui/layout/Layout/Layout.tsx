import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Navbar from "./NavBar";
import { Colors } from "../../../constants";
import { VSpace, Column } from "../";
import { Actions, AppContext } from "../../../store";
import { UserService } from "../../../services";

const Layout = ({ children }) => {
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
    return (
      <LayoutContainer responsive={true}>
        <Navbar />
        <VSpace />
        <Column responsive={true} large={10}>
          {children}
        </Column>
        <VSpace />
      </LayoutContainer>
    );
  }
  return <div>loading</div>;
};

const LayoutContainer = styled(Column)`
  background-color: ${Colors.Background};
  align-items: center;
`;

export default Layout;
