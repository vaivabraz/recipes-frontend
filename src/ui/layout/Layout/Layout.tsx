import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Navbar from "./Navbar";
import SubMenu from "./SubMenu";
import { Colors } from "../../../constants";
import { VSpace, Column } from "../";
import { Actions, AppContext } from "../../../store";
import { UserService } from "../../../services";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();

  //TODO:if state.loading -> show loading overlay
  useEffect(() => {
    async function fetchMe() {
      const response = await UserService.getCurrentUser();
      console.log(response);
      if (response.username) {
        dispatch({
          type: Actions.AddUsername,
          payload: { username: response.username },
        });
      }
      //TODO: save other received data
    }
    fetchMe();
  }, []);

  useEffect(() => {
    if (!state.user.token) {
      router.push("/login");
      return;
    }
  }, [state.user.token]);

  return (
    <LayoutContainer>
      <Navbar />
      <SubMenu />
      <VSpace />
      <Column large={10}>{children}</Column>
      <VSpace />
    </LayoutContainer>
  );
};
const LayoutContainer = styled(Column)`
  background-color: ${Colors.Background};
  align-items: center;
`;

export default Layout;
