import React from "react";
import styled from "styled-components";

import { IngredientsInRecipeType } from "../../../types";
import PlusButton from "../../../asset/svg/PlusButton";
import MinusButton from "../../../asset/svg/MinusButton";
import { InputStyle, ButtonSvg } from "../../../ui";

import IngredientsListView from "./IngredientsListView";

type Props = {
  ingredients: IngredientsInRecipeType;
  handleChangeIngredient: (event, id) => void;
  handleRemoveIngredient: (event, id) => void;
  handleAddIngredient: (event, id) => void;
  onChange: (key: string, value: IngredientsInRecipeType) => void;
};

const IngredientsGroupedView = ({
  ingredients,
  handleChangeIngredient,
  handleRemoveIngredient,
  handleAddIngredient,
  onChange,
}: Props) => {
  const handleChangeGroupName = ({ target }) => {
    const index = parseInt(target.name);
    const lineToChange = ingredients.ingredientsGroups.find(
      (i) => i.index === index
    );
    const changedLine = {
      ...lineToChange,
      groupName: target.value,
    };
    const groupsCopy = ingredients.ingredientsGroups.slice();
    const updatedGroups = groupsCopy.map((i) =>
      i.index === index ? changedLine : i
    );

    onChange("ingredients", {
      ...ingredients,
      ingredientsGroups: updatedGroups,
    });
  };

  const handleAddGroup = (event) => {
    event.preventDefault();
    const groupsCopy = ingredients.ingredientsGroups.slice();
    const groupIndexArray = groupsCopy.map((a) => a.index);
    const maxIndex =
      groupIndexArray.length > 0
        ? groupIndexArray.reduce((highest, current) =>
            current > highest ? current : highest
          )
        : 0;
    groupsCopy.push({
      groupName: "",
      index: maxIndex + 1,
    });
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
      groupIndex: maxIndex + 1,
    });
    onChange("ingredients", {
      ...ingredients,
      ingredientsList: ingredientsCopy,
      ingredientsGroups: groupsCopy,
    });
  };

  const onRemoveGroup = (event, index) => {
    event.preventDefault();
    if (ingredients.ingredientsGroups.length === 1) {
      const updatedIngredients = ingredients.ingredientsList.map((i) => {
        return { ...i, groupIndex: 0 };
      });
      return onChange("ingredients", {
        ingredientsList: updatedIngredients,
        ingredientsGroups: [
          {
            groupName: "",
            index: 0,
          },
        ],
        groupIngredients: false,
      });
    }

    const updatedGroups = ingredients.ingredientsGroups.filter(
      (i) => i.index !== index
    );

    const indexArray = updatedGroups.map((a) => a.index);
    const maxGroupIndex =
      indexArray.length > 0
        ? indexArray.reduce((highest, current) =>
            current > highest ? current : highest
          )
        : 0;

    const updatedIngredients = ingredients.ingredientsList.map((i) =>
      i.groupIndex === index ? { ...i, groupIndex: maxGroupIndex } : i
    );
    onChange("ingredients", {
      ...ingredients,
      ingredientsList: updatedIngredients,
      ingredientsGroups: updatedGroups,
    });
  };

  return (
    <>
      {ingredients.ingredientsGroups.map((i) => (
        <GroupedView key={i.index}>
          <Line>
            <GroupNameInput
              placeholder="Grupes pavadinimas"
              value={i.groupName}
              onChange={handleChangeGroupName}
              name={i.index}
              autoComplete="off"
            />
            <ButtonSvg
              onClick={(event) => onRemoveGroup(event, i.index)}
              Icon={MinusButton}
            />
          </Line>
          <IngredientsListView
            ingredientsList={ingredients.ingredientsList.filter(
              (line) => line.groupIndex === i.index
            )}
            handleAddIngredient={handleAddIngredient}
            handleChangeIngredient={handleChangeIngredient}
            handleRemoveIngredient={handleRemoveIngredient}
            groupIndex={i.index}
          />
        </GroupedView>
      ))}

      <ButtonSvg
        onClick={handleAddGroup}
        Icon={PlusButton}
        text="Pridėti grupę"
      />
    </>
  );
};

export default React.memo(IngredientsGroupedView);

const Line = styled.div`
  display: flex;
  margin: 0 0.5rem 0.5rem 0;
`;

const GroupNameInput = styled.input`
  ${InputStyle}
  flex: 1;
  margin-right: 0.5rem;
`;

const GroupedView = styled.div`
  padding-bottom: 1rem;
`;
