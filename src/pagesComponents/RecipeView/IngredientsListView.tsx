import React from "react";
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { TextSection } from "../../ui";
import { IngredientsInRecipeType, IngredientsListItemType } from "../../types";

const IngredientsListGrouped: React.FC<Props> = ({ ingredients }) => {
  return (
    <Box paddingLeft="24px">
      {ingredients.ingredientsGroups.map((g) => (
        <>
          <Typography variant="h5">{g.groupName}</Typography>
          <IngredientsList
            ingredientsList={ingredients.ingredientsList.filter(
              (a) => a.groupIndex === g.index
            )}
          />
        </>
      ))}
    </Box>
  );
};

type IngredientsListProps = {
  ingredientsList: IngredientsListItemType[];
};

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredientsList,
}) => {
  return (
    <Box paddingLeft="24px">
      {ingredientsList.map((r) => (
        <Box display="flex" key={r.product + r.quantity}>
          <ListItemDot />
          <Typography variant="body1">
            {r.product + " " + r.quantity}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

type Props = {
  ingredients: IngredientsInRecipeType;
};

const IngredientsListView: React.FC<Props> = ({ ingredients }) => {
  if (!ingredients?.ingredientsList?.length) {
    return null;
  }
  return (
    <TextSection title="PRODUKTAI: ">
      {ingredients.groupIngredients ? (
        <IngredientsListGrouped ingredients={ingredients} />
      ) : (
        <IngredientsList ingredientsList={ingredients.ingredientsList} />
      )}
    </TextSection>
  );
};

export default IngredientsListView;

const ListItemDot = styled.div`
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: 1px solid var(--BorderDarker);
  background-color: var(--AccentColor);
  width: 4px;
  height: 4px;
  margin: 0.5rem;
`;
