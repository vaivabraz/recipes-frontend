import React from "react";
import styled from "styled-components";

import { IngredientsListItemType } from "../../../../types";
import MinusButton from "../../../../asset/svg/MinusButton";
import { Colors } from "../../../../constants";
import { InputStyle } from "../../../components";

type Props = {
  key: any;
  entry: IngredientsListItemType;
  onChange: (event, id) => void;
  onRemove: (event, id) => void;
};

const IngredientLine = ({ entry, onChange, onRemove }: Props) => {
  const onInputChange = (e) => {
    onChange(e, entry.id);
  };

  const onRemoveProduct = (e) => {
    onRemove(e, entry.id);
  };

  return (
    <Line>
      <ProductInput
        placeholder="Produktas"
        value={entry.product}
        onChange={onInputChange}
        name={"product"}
        autoComplete="off"
      />
      <QuantityInput
        placeholder="Kiekis"
        value={entry.quantity}
        onChange={onInputChange}
        name={"quantity"}
        autoComplete="off"
      />
      <Button onClick={onRemoveProduct}>
        <MinusButton />
      </Button>
    </Line>
  );
};

export default React.memo(IngredientLine);

const Line = styled.div`
  display: flex;
  margin: 0.5rem 1rem;
`;

const ProductInput = styled.input`
  ${InputStyle}
  flex: 1;
`;

const QuantityInput = styled.input`
  ${InputStyle}
  width: 10rem;
  margin: 0 0.5rem;
`;

const Button = styled.button`
  background-color: white;
  align-items: center;
  display: flex;
  svg {
    fill: ${Colors.Border};
  }
`;
