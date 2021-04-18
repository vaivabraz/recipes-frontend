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
    <Container>
      <ProcessContainer>
        <Input
          placeholder={"Procesas"}
          onChange={handleChange}
          name="processName"
          value={timeRange.processName}
          containerStyle={{ padding: 0 }}
        />
      </ProcessContainer>
      <ProcessContainer>
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
      </ProcessContainer>
    </Container>
  );
};

export default React.memo(TimeRangeLine);

const Container = styled(Row)`
  flex-wrap: nowrap;
`;

const ProcessContainer = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
`;
const TimeContainer = styled.div`
  display: flex;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
