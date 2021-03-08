import React from "react";
import styled from "styled-components";

import { IngredientsListItemType } from "../../../types";
import { InputStyle, ButtonSvg } from "../../../ui";

import MinusButton from "../../../asset/svg/MinusButton";

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
      <ButtonSvg onClick={onRemoveProduct} Icon={MinusButton} />
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