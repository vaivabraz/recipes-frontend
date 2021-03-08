import React from "react";

import { IngredientsListItemType } from "../../../types";
import PlusButton from "../../../asset/svg/PlusButton";
import { ButtonSvg } from "../../../ui";

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
      <ButtonSvg
        onClick={handleAddIngredientClick}
        Icon={PlusButton}
        text="Pridėti ingridienta"
      />
    </>
  );
};

export default React.memo(IngredientsListView);
