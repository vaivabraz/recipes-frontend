import styled from "styled-components";
import { Link, Row, HSpace } from "../../ui";

const SubMenu = () => (
  <SubMenuContainer>
    <Row>
      <Link href="/recipes/createNewRecipe" title="Sukurti nauja"></Link>
      {/* <Text>Kategorijos (TBD)</Text> */}
      <HSpace width={3} />
      <Text>Paieska (TBD)</Text>
    </Row>
  </SubMenuContainer>
);

const SubMenuContainer = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 940px) {
  }
`;

const Text = styled.p``;

export default SubMenu;
