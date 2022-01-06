import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import { RecipesListHardcoded } from "../../hardcodedData";
import SubMenu from "./SubMenu";
import { FullRecipeType } from "../../types";
import { Box, Typography } from "@mui/material";

type RecipesListProps = {
  recipesList: FullRecipeType[];
  isLoading: boolean;
  isError: boolean;
};

const RecipesList = ({
  recipesList = [],
  isLoading,
  isError,
}: RecipesListProps) => {
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
