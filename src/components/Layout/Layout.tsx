import Navbar from "./Navbar";
import SubMenu from "./SubMenu";
import styled from "styled-components";
import { Colors } from "../../constants";

const Layout = (props) => (
  <LayoutContainer>
    <Navbar />
    <SubMenu />
    <BodyContainer>{props.children}</BodyContainer>
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  background-color: ${Colors.Background};
`;

const BodyContainer = styled.div`
  padding: 0rem 9rem;
  padding-bottom: 3rem;
`;

export default Layout;
