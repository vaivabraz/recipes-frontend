import styled from "styled-components";
import { Colors } from "../constants";
import Link from "./Link";

const Navbar = () => (
  <NavbarContainer>
    <MenuList>
      <MenuItem>
        <Link href="/" title="Receptai"></Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about" title="Vaiva"></Link>
      </MenuItem>
    </MenuList>
  </NavbarContainer>
);

const NavbarContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${Colors.SoftGrey};
`;
const MenuList = styled.ul`
  list-style-type: none;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const MenuItem = styled.li`
  display: inline;
  float: left;
  padding: 2vh;
`;

const Item = styled.a`
  color: ${Colors.ActiveColor};
`;

// const LinkComponent = styled(Link)`
//   text-decoration: none;
//   color: ${Colors.ActiveColor};
// `;

export default Navbar;
