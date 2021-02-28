import React from "react";
import styled from "styled-components";
import { TextSection, Text, Row } from "../../ui";
import { IngredientsInRecipeType, IngredientsListItemType } from "../../types";
import { Colors } from "../../constants";

const IngredientsListGrouped: React.FC<Props> = ({ ingredients }) => {
  return (
    <Container>
      {ingredients.ingredientsGroups.map((g) => (
        <>
          <Text text={g.groupName} type={"h5"} />
          <IngredientsList
            ingredientsList={ingredients.ingredientsList.filter(
              (a) => a.groupIndex === g.index
            )}
          />
        </>
      ))}
    </Container>
  );
};

type IngredientsListProps = {
  ingredientsList: IngredientsListItemType[];
};

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredientsList,
}) => {
  return (
    <Container>
      {ingredientsList.map((r) => (
        <ListItem>
          <ListItemDot />
          <Text
            key={r.product + r.quantity}
            text={r.product + " " + r.quantity}
          />
        </ListItem>
      ))}
    </Container>
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

const Container = styled.div`
  padding-left: 1rem;
`;

const ListItem = styled(Row)`
  display: flex;
  align-items: center;
`;

const ListItemDot = styled.div`
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: 1px solid ${Colors.BorderDarker};
  width: 8px;
  height: 8px;
  margin: 0.5rem;
`;
