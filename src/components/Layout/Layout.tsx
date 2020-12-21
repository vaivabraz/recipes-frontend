import Navbar from "./Navbar";
import SubMenu from "./SubMenu";
import styled from "styled-components";

const Layout = (props) => (
  <LayoutContainer>
    <Navbar />
    <SubMenu />
    <BodyContainer>{props.children}</BodyContainer>
  </LayoutContainer>
);

const LayoutContainer = styled.div``;

const BodyContainer = styled.div``;

export default Layout;
