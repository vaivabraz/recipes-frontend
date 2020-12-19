import { Layout, RecipesList, SideContainer } from "../../components";
import styled from "styled-components";

const Recipes = () => {
  return (
    <Layout>
      <BodyContainer>
        <RecipesList />
        <SideContainer />
      </BodyContainer>
    </Layout>
  );
};

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 80% auto;
  @media screen and (max-width: 940px) {
    grid-template-columns: 100%;
  }
`;

export default Recipes;
