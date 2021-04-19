import React from "react";
import styled from "styled-components";

import { PreparationTimeRangeType } from "../../../types";
import { ButtonSvg, Row, InputStyle } from "../../../ui";
import MinusButton from "../../../asset/svg/MinusButton";

type Props = {
  timeRange: PreparationTimeRangeType;
  index: number;
  onChange: (event, id) => void;
  onRemove: (event, id) => void;
};

const TimeRangeLine = ({ timeRange, index, onChange, onRemove }: Props) => {
  const handleChange = (e) => {
    onChange(e, index);
  };
  const onRemoveTimeRange = (e) => {
    onRemove(e, index);
  };

  return (
    <Container>
      <ProcessInput
        placeholder={"Procesas"}
        onChange={handleChange}
        name="processName"
        value={timeRange.processName}
        containerStyle={{ padding: 0 }}
      />
      <TimeContainer>
        <TimeInput
          placeholder={"Laikas"}
          onChange={handleChange}
          name="time"
          value={timeRange.time}
          containerStyle={{ padding: 0 }}
        />

        <ButtonSvg onClick={onRemoveTimeRange} Icon={MinusButton} />
      </TimeContainer>
    </Container>
  );
};

export default React.memo(TimeRangeLine);

const Container = styled(Row)`
  margin: 0 0.5rem;
`;

const ProcessInput = styled.input`
  ${InputStyle}
  flex: 1;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const TimeContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const TimeInput = styled.input`
  ${InputStyle}
  width: 15rem;
  margin: 0 0.5rem;
`;
