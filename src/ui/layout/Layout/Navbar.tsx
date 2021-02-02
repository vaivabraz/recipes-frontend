import styled from "styled-components";
import { Link } from "../../";
import NavBarIllustration from "../../../asset/svg/NavBarIllustration";
import { HSpace, Row } from "../";

const Navbar = () => (
  <NavbarContainer>
    <IllustrationContainer>
      <NavBarIllustration />
    </IllustrationContainer>
    <Row>
      <Link href="/recipes" title="Receptai" bold />
      <HSpace width={2} />
      <Link href="/about" title="Vaiva" bold></Link>
      <HSpace width={2} />
      <Link href="/about" title="Atsijungti" bold></Link>
    </Row>
  </NavbarContainer>
);

const NavbarContainer = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IllustrationContainer = styled.div`
  position: absolute;
  pointer-events: none;
`;

export default Navbar;
