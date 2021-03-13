import React from "react";
import styled from "styled-components";

import { PreparationTimeRangeType } from "../../../types";
import { ButtonSvg, Row, Input } from "../../../ui";
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
    <StyledRow>
      <ProcessContainer>
        <Input
          placeholder={"Procesas"}
          onChange={handleChange}
          name="processName"
          value={timeRange.processName}
          containerStyle={{ padding: 0 }}
        />
      </ProcessContainer>
      <TimeContainer>
        <Input
          placeholder={"Laikas"}
          onChange={handleChange}
          name="time"
          value={timeRange.time}
          containerStyle={{ padding: 0 }}
        />
      </TimeContainer>
      <ButtonSvg onClick={onRemoveTimeRange} Icon={MinusButton} />
    </StyledRow>
  );
};

export default React.memo(TimeRangeLine);

const StyledRow = styled(Row)`
  padding-bottom: 0.5rem;
`;
const ProcessContainer = styled.div`
  display: flex;
  flex: 2;
  margin-right: 0.5rem;
`;
const TimeContainer = styled.div`
  display: flex;
  flex: 1;
  margin-right: 0.5rem;
`;
