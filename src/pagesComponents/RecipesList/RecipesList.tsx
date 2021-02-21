import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import { RecipesListHardcoded } from "../../hardcodedData";
import { Row, Column } from "../../ui";

const RecipesList = () => {
  return (
    <RecipesContainer>
      {RecipesListHardcoded.map((recipe) => (
        <Column large={3} medium={6} small={12}>
          <RecipeCard key={recipe.slug} recipe={recipe} />
        </Column>
      ))}
    </RecipesContainer>
  );
};

//TODO: useViewPort? if phone - remove extra padding
const RecipesContainer = styled(Row)`
  padding: 0 1rem;
`;

export default RecipesList;
