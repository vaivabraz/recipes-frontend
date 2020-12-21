import styled from "styled-components";
import { Colors } from "../../constants";
import { Link } from "../";
import NavBarIllustration from "../../asset/svg/NavBarIllustration";

const Navbar = () => (
  <NavbarContainer>
    <MenuList>
      <MenuItem>
        <Link href="/recipes" title="Receptai" bold></Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about" title="Vaiva" bold></Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about" title="Atsijungti" bold></Link>
      </MenuItem>
    </MenuList>
    <div style={{ position: "absolute" }}>
      <NavBarIllustration />
    </div>
  </NavbarContainer>
);

const NavbarContainer = styled.div`
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: ${Colors.SoftGrey}; */
  padding-right: 6rem;
  /* @media screen and (max-width: 940px) {
    height: 3rem;
    justify-content: center;
  } */
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
