import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Navbar from "./Navbar";
import SubMenu from "./SubMenu";
import { Colors } from "../../../constants";
import { VSpace, Column } from "../";
import { AppContext } from "../../../store";

const Layout = ({ children }) => {
  const { state } = useContext(AppContext);
  const router = useRouter();

  //TODO:if state.loading -> show loading overlay

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
