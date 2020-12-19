import Navbar from "./Navbar";
import styled from "styled-components";

const Layout = (props) => (
  <LayoutContainer>
    <Navbar />
    <BodyContainer>{props.children}</BodyContainer>
  </LayoutContainer>
);

const LayoutContainer = styled.div``;

const BodyContainer = styled.div``;

export default Layout;
