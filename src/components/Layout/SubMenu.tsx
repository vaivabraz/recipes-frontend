import styled from "styled-components";
import { Colors } from "../../constants";
import { Link } from "../";

const SubMenu = () => (
  <SubMenuContainer>
    <MenuList>
      <MenuItem>
        <Link href="/createNew" title="Sukurti nauja"></Link>
      </MenuItem>
      <MenuItem>
        <Link href="/" title="Kategorijos"></Link>
      </MenuItem>
      <MenuItem>
        <Link href="/" title="Paieska"></Link>
      </MenuItem>
    </MenuList>
  </SubMenuContainer>
);

const SubMenuContainer = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${Colors.SoftGrey}; */
  padding-right: 6rem;
  @media screen and (max-width: 940px) {
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

export default SubMenu;
