import { Layout, RecipesList, CategoriesBar } from "../../components";
import styled from "styled-components";

const Recipes = () => {
  return (
    <Layout>
      <BodyContainer>
        <RecipesList />
        <SideContainer>
          <SearchContainer />
          <CategoriesBar />
        </SideContainer>
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

const SideContainer = styled.div``;

const SearchContainer = styled.div`
  height: 6rem;
`;

export default Recipes;
