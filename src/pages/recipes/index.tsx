import { Layout, RecipesList } from "../../components";
import styled from "styled-components";

const Recipes = () => {
  return (
    <Layout>
      <BodyContainer>
        <RecipesList />
      </BodyContainer>
    </Layout>
  );
};

const BodyContainer = styled.div`
  display: grid;
  @media screen and (max-width: 940px) {
    grid-template-columns: 100%;
  }
`;

export default Recipes;
