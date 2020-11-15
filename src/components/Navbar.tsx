import styled from "styled-components";
import { Colors } from "../constants";
import Link from "./components/Link";

const Navbar = () => (
  <NavbarContainer>
    <MenuList>
      <MenuItem>
        <Link href="/recipes" title="Receptai"></Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about" title="Vaiva"></Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about" title="Atsijungti"></Link>
      </MenuItem>
    </MenuList>
  </NavbarContainer>
);

const NavbarContainer = styled.div`
  height: 9rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${Colors.SoftGrey};
  padding-right:6rem;
  @media screen and (max-width: 940px) {
    height: 3rem;
    justify-content: center;
 }
`;
const MenuList = styled.ul`
  overflow: hidden;
`;

const MenuItem = styled.li`
  display: inline;
  float: left;
  padding-left: 3rem;
`;

export default Navbar;
