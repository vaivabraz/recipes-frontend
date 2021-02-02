import React from "react";
import styled from "styled-components";

import { IngredientsListItemType } from "../../../../types";
import PlusButton from "../../../../asset/svg/PlusButton";
import { Colors } from "../../../../constants";

import IngredientLine from "./IngredientLine";

type Props = {
  ingredientsList: IngredientsListItemType[];
  handleChangeIngredient: (event, id) => void;
  handleRemoveIngredient: (event, id) => void;
  handleAddIngredient: (event, id) => void;
  groupIndex: Number;
};

const IngredientsListView = ({
  ingredientsList,
  handleChangeIngredient,
  handleRemoveIngredient,
  handleAddIngredient,
  groupIndex,
}: Props) => {
  const handleAddIngredientClick = (event) => {
    handleAddIngredient(event, groupIndex);
  };

  return (
    <>
      {ingredientsList.map((i) => (
        <IngredientLine
          key={i.id}
          entry={i}
          onChange={handleChangeIngredient}
          onRemove={handleRemoveIngredient}
        />
      ))}
      <Button onClick={handleAddIngredientClick}>
        <PlusButton />
        <h5>Pridėti ingridienta</h5>
      </Button>
    </>
  );
};

export default React.memo(IngredientsListView);

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
