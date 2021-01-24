import React from "react";
import { TextSection } from "../..";

type Props = {
  ingredients: { product: string; quantity: string }[];
};

const IngredientsList: React.FC<Props> = ({ ingredients }) => {
  //TODO: perdaryt, kad priimtu nauja ingridientu tipa
  if (!ingredients?.length) {
    return null;
  }
  return (
    <TextSection title="Produktai: ">
      {ingredients.map((r) => (
        <li key={r.product + r.quantity}>
          {r.quantity} {r.product}
        </li>
      ))}
    </TextSection>
  );
};

export default IngredientsList;
