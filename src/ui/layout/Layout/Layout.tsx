import Navbar from "./Navbar";
import SubMenu from "./SubMenu";
import styled from "styled-components";
import { Colors } from "../../../constants";
import { VSpace, Column } from "../";

const Layout = (props) => (
  <LayoutContainer>
    <Navbar />
    <SubMenu />
    <VSpace />
    <BodyContainer>{props.children}</BodyContainer>
    <VSpace />
  </LayoutContainer>
);

const LayoutContainer = styled(Column)`
  background-color: ${Colors.Background};
  align-items: center;
`;

const BodyContainer = styled(Column).attrs(() => ({
  small: 11,
  medium: 10,
  large: 10,
}))`
  padding: 0;
`;

export default Layout;
