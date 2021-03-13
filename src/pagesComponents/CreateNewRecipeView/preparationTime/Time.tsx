import React from "react";

import { PreparationTimeInRecipeType } from "../../../types";
import { TextButton, Text, HSpace, Column, Row, Input } from "../../../ui";

import TimeRanges from "./TimeRanges";

type Props = {
  time: PreparationTimeInRecipeType;
  onChange: (key: string, value: PreparationTimeInRecipeType) => void;
};

const Time = ({ time, onChange }: Props) => {
  const handleTotalTimeChange = ({ target }) => {
    onChange("time", {
      ...time,
      totalTime: target.value,
    });
  };

  const handleGroupButton = (event, shouldSplitTime) => {
    event.preventDefault();
    onChange("time", {
      ...time,
      splitTime: shouldSplitTime,
    });
  };

  const splitTimeButtonProps = time.splitTime
    ? {
        text: "Nedalinti laiko",
        onClick: (e) => handleGroupButton(e, false),
      }
    : {
        text: "Isdalinti laika",
        onClick: (e) => handleGroupButton(e, true),
      };

  return (
    <Column>
      <Row>
        <Text type="h5">Kiek laiko uztruks</Text>
        <HSpace />
        <TextButton {...splitTimeButtonProps}></TextButton>
      </Row>

      {time.splitTime ? (
        <TimeRanges time={time} onChange={onChange} />
      ) : (
        <Input
          onChange={handleTotalTimeChange}
          value={time.totalTime}
          containerStyle={{ padding: 0 }}
        />
      )}
    </Column>
  );
};

export default React.memo(Time);
