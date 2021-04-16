import styled from "styled-components";
import { Link, HSpace, Row } from "../../../";
import NavBarIllustration from "../../../../asset/svg/NavBarIllustration";

type DesktopNavbarProps = {
  NavBarItems: { href: string; title: string }[];
};

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ NavBarItems }) => {
  return (
    <NavbarContainer>
      {/* <IllustrationContainer>
        <NavBarIllustration />
      </IllustrationContainer> */}
      <Row>
        <HSpace width={2} />
        {NavBarItems.map((i) => {
          return (
            <ItemContainer key={i.href}>
              <Link href={i.href} title={i.title} bold />
              <HSpace width={2} />
            </ItemContainer>
          );
        })}
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
  width: 100%;
  border-bottom: var(--BorderLine);
  background-color: var(--HeaderBackground);
  box-shadow: var(--Shadow);
`;

const ItemContainer = styled.div`
  display: flex;
`;

const IllustrationContainer = styled.div`
  position: absolute;
  pointer-events: none;
`;

export default DesktopNavbar;
