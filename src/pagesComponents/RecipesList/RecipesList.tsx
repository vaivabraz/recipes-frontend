import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

import { getMyRecipes } from "../../services";
import { reactQueryKeys } from "../../constants/reactQueryKeys";
import RecipeCard from "./RecipeCard";
import SubMenu from "./SubMenu";

const RecipesList = () => {
  const { query } = useRouter();
  const {
    isLoading,
    isError,
    data: recipesList,
  } = useQuery([reactQueryKeys.recipes, query], () => getMyRecipes(query));
  const recipesExists = recipesList?.length > 0;

  return (
    <Box width={"100%"}>
      <SubMenu />
      <RecipesGrid>
        {isLoading && (
          <Typography variant="h2" textAlign="center">
            Loading...
          </Typography>
        )}
        {!isLoading && recipesExists ? (
          recipesList.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))
        ) : (
          <Typography variant="h2" textAlign="center">
            No recipes yet, create your first one!
          </Typography>
        )}
      </RecipesGrid>
    </Box>
  );
};

const RecipesGrid = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  box-sizing: border-box;
  padding: 0 24px;
`;

export default RecipesList;
