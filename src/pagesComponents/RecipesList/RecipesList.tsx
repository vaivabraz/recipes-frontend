import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { getMyRecipes } from "../../services";
import { reactQueryKeys } from "../../constants/reactQueryKeys";
import RecipeCard from "./RecipeCard";
import SubMenu from "./SubMenu";

const RecipesList = () => {
  const { query } = useRouter();
  const queryKey = [reactQueryKeys.recipes];
  if (Object.keys(query).length !== 0) {
    queryKey.push(JSON.stringify(query));
  }
  const {
    isLoading,
    isError,
    data: recipesList,
  } = useQuery(queryKey, () => getMyRecipes(query));
  const recipesExists = recipesList?.length > 0;

  return (
    <RecipesPageLayout>
      <SubMenu query={query} />
      <RecipesGrid>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : recipesExists ? (
          recipesList.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))
        ) : (
          <h2>No recipes yet, create your first one!</h2>
        )}
      </RecipesGrid>
    </RecipesPageLayout>
  );
};

const RecipesPageLayout = styled.div`
  width: 100%;
`;

const RecipesGrid = styled.div`
  display: grid;
  gap: 24px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  box-sizing: border-box;
  padding: 0 24px;
`;

export default RecipesList;
