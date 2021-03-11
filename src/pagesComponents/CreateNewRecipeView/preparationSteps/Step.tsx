import React from "react";
import styled from "styled-components";

import { StepsListItemType } from "../../../types";
import { ButtonSvg, Text, Input } from "../../../ui";

import MinusButton from "../../../asset/svg/MinusButton";

type Props = {
  index: number;
  key: any;
  entry: StepsListItemType;
  onChange: (event, id, groupIndex) => void;
  onRemove: (event, id, groupIndex) => void;
};

const Step = ({ index, entry, onChange, onRemove }: Props) => {
  const onInputChange = (e) => {
    onChange(e, index, entry.groupIndex);
  };

  const onRemoveProduct = (e) => {
    onRemove(e, index, entry.groupIndex);
  };

  return (
    <Line>
      <Text style={{ paddingTop: "0.5rem" }}>{index + 1 + "."}</Text>
      <StepInput
        placeholder="Kaip gaminti..."
        value={entry.step}
        onChange={onInputChange}
        autoComplete="off"
        multiline
        containerStyle={{ padding: 0 }}
      />
      <ButtonSvg onClick={onRemoveProduct} Icon={MinusButton} />
    </Line>
  );
};

export default React.memo(Step);

const Line = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

const StepInput = styled(Input)`
  flex: 1;
  margin: 0 0.5rem;
`;
