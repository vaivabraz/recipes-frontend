import React, { useState } from "react";
import styled from "styled-components";

import PlusButton from "../../../asset/svg/PlusButton";
import { Label } from "../../components";
import { Colors } from "../../../constants";

import IngredientLine from "./IngredientLine";
import { IngredientsListItem } from "../../../types";

type Props = {
  ingredients: IngredientsListItem[];
  onChange: (key: string, value: IngredientsListItem[]) => void;
};

const IngredientsList = ({ ingredients, onChange }: Props) => {
  const handleChangeIngredient = ({ target }, id) => {
    const lineToChange = ingredients.find((i) => i.id === id);
    const changedLine = {
      ...lineToChange,
      [target.name]: target.value,
    };

    const ingredientsCopy = ingredients.slice();
    const updatedIngredients = ingredientsCopy.map((i) =>
      i.id === id ? changedLine : i
    );

    onChange("ingredients", updatedIngredients);
  };

  const handleRemoveIngredient = (event, id) => {
    event.preventDefault();
    const updatedIngredients = ingredients.filter((i) => i.id !== id);
    onChange("ingredients", updatedIngredients);
  };

  const handleAddIngredient = (event) => {
    event.preventDefault();
    const ingredientsCopy = ingredients.slice();
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
    });
    onChange("ingredients", ingredientsCopy);
  };

  return (
    <>
      <TitleLine>
        <Label>Ingridientai</Label>
      </TitleLine>

      {ingredients.map((i) => (
        <IngredientLine
          key={i.id}
          entry={{
            id: i.id,
            product: i.product,
            quantity: i.quantity,
          }}
          onChange={handleChangeIngredient}
          onRemove={handleRemoveIngredient}
        />
      ))}
      <Button onClick={handleAddIngredient}>
        <PlusButton />

        <h5>Pridėti ingridienta</h5>
      </Button>
    </>
  );
};

export default React.memo(IngredientsList);

const TitleLine = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  align-items: center;
  display: flex;
  margin: 0 1rem;
  svg {
    fill: ${Colors.DarkGrey};
  }
  h5 {
    color: ${Colors.DarkGrey};
    padding-left: 0.5rem;
  }
`;
