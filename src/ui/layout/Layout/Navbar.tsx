import { useContext } from "react";
import styled from "styled-components";
import { Link, HSpace, Row } from "../../";
import NavBarIllustration from "../../../asset/svg/NavBarIllustration";
import { Colors } from "../../../constants";
import { AppContext } from "../../../store";

const Navbar = () => {
  const { state } = useContext(AppContext);

  return (
    <NavbarContainer>
      {/* <IllustrationContainer>
        <NavBarIllustration />
      </IllustrationContainer> */}
      <Row>
        <Link href="/recipes" title="Receptai" bold />
        <HSpace width={2} />
        <Link href="/notes" title="Užrašai" bold />
        <HSpace width={2} />
        <Link href="/planner" title="Planai" bold />
        <HSpace width={2} />
        <Link href="/profile" title={state.user.username} bold></Link>
        <HSpace width={2} />
      </Row>
    </NavbarContainer>
  );
};
const NavbarContainer = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px ${Colors.Border} solid;
`;

const IllustrationContainer = styled.div`
  position: absolute;
  pointer-events: none;
`;

export default Navbar;
