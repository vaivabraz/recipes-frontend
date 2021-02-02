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

const LayoutContainer = styled.div`
  background-color: ${Colors.Background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyContainer = styled(Column).attrs(() => ({
  small: 12,
  medium: 10,
  large: 10,
}))``;

export default Layout;
