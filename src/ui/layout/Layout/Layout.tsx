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
    <Column>{props.children}</Column>
    <VSpace />
  </LayoutContainer>
);

const LayoutContainer = styled(Column)`
  background-color: ${Colors.Background};
  align-items: center;
`;

export default Layout;
