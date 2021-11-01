import styled from "styled-components";
import { Link, HSpace, Row } from "../../../";

type DesktopNavbarProps = {
  NavBarItems: { href: string; title: string }[];
};

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ NavBarItems }) => {
  return (
    <NavbarContainer>
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
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
`;

export default DesktopNavbar;
