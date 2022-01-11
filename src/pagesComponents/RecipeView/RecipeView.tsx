import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Typography, Box, Link as MuiLink, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { FullRecipeType } from "../../types";
import { TextSection, HSpace } from "../../ui";

import CategoriesList from "./CategoriesList";
import IngredientsListView from "./IngredientsListView";
import RecipeTime from "./RecipeTime";
import PreparationStepsView from "./PreparationStepsView";

type FullRecipeViewProps = {
  recipe: FullRecipeType;
  onEdit: () => void;
};

const FullRecipeView = ({ recipe, onEdit }: FullRecipeViewProps) => {
  const image = recipe.image || "/soup2.jpg";
  //TODO: change alignment on small screens
  //TODO: add ability to show separated times
  //TODO: add ability to show preparation steps
  //TODO: image is not correct

  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <Box>
        <Typography
          variant="h2"
          textAlign="center"
          paddingTop="48px"
          paddingBottom="9px"
        >
          {recipe.title}
        </Typography>
        <Typography variant="body1" textAlign="center" paddingBottom="24px">
          {recipe.summary}
        </Typography>
      </Box>
      <Box display="flex" flexDirection={isBigScreen ? "row" : "column"}>
        <Box
          flex={2}
          padding="24px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image src={image} title={recipe.title} alt={recipe.title} />
          <Box>
            {recipe.portions && (
              <Box display="flex">
                <Typography variant="h5">PORCIJU SKAIČIUS:</Typography>
                <Typography variant="body1" paddingLeft="9px">
                  {recipe.portions}
                </Typography>
              </Box>
            )}
            {recipe.time && <RecipeTime time={recipe.time} />}
          </Box>
        </Box>
        <Box flex={3} padding={"24px"}>
          <IngredientsListView ingredients={recipe.ingredients} />
          <PreparationStepsView steps={recipe.preparation} />
          {recipe.notes && (
            <TextSection title="PASTABOS: " text={recipe.notes} />
          )}
          <CategoriesList categories={recipe.categories} />
          <Box>
            <Box display="flex" alignItems="center">
              <Typography variant="h5">AUTORIUS: </Typography>
              <HSpace />
              <Link href="" passHref>
                <MuiLink underline="none">{recipe.author}</MuiLink>
              </Link>
            </Box>
            <Box padding="24px">
              <Button variant="contained" type="submit" onClick={onEdit}>
                Redaguoti
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FullRecipeView;

const Image = styled.img`
  max-width: 100%;
  min-width: 250px;
  margin-bottom: 1rem;
  border: var(--BorderLine);
`;
