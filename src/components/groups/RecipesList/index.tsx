import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import { RecipesListHardcoded } from "../../../hardcodedData";

const RecipesList = () => {
  return (
    <MainContainer>
      <List>
        {RecipesListHardcoded.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </List>
    </MainContainer>
  );
};

const MainContainer = styled.main``;

const List = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default RecipesList;
