import React from "react";
import { Button } from "@mui/material";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

import { IngredientsListItemType } from "../../../types";
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
      <Button
        startIcon={<AddCircleOutlineSharpIcon />}
        onClick={handleAddIngredientClick}
        sx={{ justifyContent: "flex-start" }}
      >
        Pridėti ingridienta
      </Button>
    </>
  );
};

export default React.memo(IngredientsListView);
