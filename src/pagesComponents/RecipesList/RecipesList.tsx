import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import { RecipesListHardcoded } from "../../hardcodedData";
import SubMenu from "./SubMenu";

const RecipesList = () => {
  return (
    <RecipesContainer>
      <SubMenu />
      <RecipesGrid>
        {RecipesListHardcoded.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </RecipesGrid>
    </RecipesContainer>
  );
};

const RecipesContainer = styled.div``;

const RecipesGrid = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  box-sizing: border-box;
  padding: 0 24px;
`;

export default RecipesList;
