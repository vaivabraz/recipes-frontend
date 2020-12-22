import styled from "styled-components";
import { Link } from "../";

const SubMenu = () => (
  <SubMenuContainer>
    <MenuList>
      <MenuItem>
        <Link href="/createNew" title="Sukurti nauja"></Link>
      </MenuItem>
      <MenuItem>
        <Text>Kategorijos (TBD)</Text>
      </MenuItem>
      <MenuItem>
        <Text>Paieska (TBD)</Text>
      </MenuItem>
    </MenuList>
  </SubMenuContainer>
);

const SubMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Text = styled.p``;

export default SubMenu;
