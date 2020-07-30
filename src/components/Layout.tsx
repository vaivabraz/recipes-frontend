import Navbar from "./Navbar";
import styled from "styled-components";

const Layout = (props) => (
  <LayoutContainer>
    <Navbar />
    {props.children}
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export default Layout;
