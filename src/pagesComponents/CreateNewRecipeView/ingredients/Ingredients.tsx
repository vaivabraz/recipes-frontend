import React from "react";

import { IngredientsInRecipeType } from "../../../types";
import { TextButton, Text, HSpace, Column, Row } from "../../../ui";

import IngredientsListView from "./IngredientsListView";
import IngredientsGroupedView from "./IngredientsGroupedView";

type Props = {
  ingredients: IngredientsInRecipeType;
  onChange: (key: string, value: IngredientsInRecipeType) => void;
};

const Ingredients = ({ ingredients, onChange }: Props) => {
  const handleChangeIngredient = ({ target }, id) => {
    const lineToChange = ingredients.ingredientsList.find((i) => i.id === id);
    const changedLine = {
      ...lineToChange,
      [target.name]: target.value,
    };
    const ingredientsCopy = ingredients.ingredientsList.slice();
    const updatedIngredientsList = ingredientsCopy.map((i) =>
      i.id === id ? changedLine : i
    );

    onChange("ingredients", {
      ...ingredients,
      ingredientsList: updatedIngredientsList,
    });
  };

  const handleRemoveIngredient = (event, id) => {
    event.preventDefault();
    const updatedIngredients = ingredients.ingredientsList.filter(
      (i) => i.id !== id
    );
    onChange("ingredients", {
      ...ingredients,
      ingredientsList: updatedIngredients,
    });
  };

  const handleAddIngredient = (event, groupIndex) => {
    event.preventDefault();
    const ingredientsCopy = ingredients.ingredientsList.slice();
    const indexArray = ingredientsCopy.map((a) => a.id);
    const maxId =
      indexArray.length > 0
        ? indexArray.reduce((highest, current) =>
            current > highest ? current : highest
          )
        : 0;
    ingredientsCopy.push({
      product: "",
      quantity: "",
      id: maxId + 1,
      groupIndex: groupIndex,
    });
    onChange("ingredients", {
      ...ingredients,
      ingredientsList: ingredientsCopy,
    });
  };

  const handleGroupButton = (event, shouldShowGroups) => {
    event.preventDefault();
    onChange("ingredients", {
      ...ingredients,
      groupIngredients: shouldShowGroups,
    });
  };

  const groupsIngredientsButtonProps = ingredients.groupIngredients
    ? {
        text: "Nebegrupuoti",
        onClick: (e) => handleGroupButton(e, false),
      }
    : {
        text: "Grupuoti",
        onClick: (e) => handleGroupButton(e, true),
      };

  return (
    <Column>
      <Row>
        <Text type="h5">Ingridientai</Text>
        <HSpace />
        <TextButton {...groupsIngredientsButtonProps}></TextButton>
      </Row>
      {ingredients.groupIngredients ? (
        <IngredientsGroupedView
          ingredients={ingredients}
          handleAddIngredient={handleAddIngredient}
          handleChangeIngredient={handleChangeIngredient}
          handleRemoveIngredient={handleRemoveIngredient}
          onChange={onChange}
        />
      ) : (
        <IngredientsListView
          ingredientsList={ingredients.ingredientsList}
          handleAddIngredient={handleAddIngredient}
          handleChangeIngredient={handleChangeIngredient}
          handleRemoveIngredient={handleRemoveIngredient}
          groupIndex={0}
        />
      )}
    </Column>
  );
};

export default React.memo(Ingredients);
