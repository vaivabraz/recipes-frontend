import React from "react";

import { PreparationTimeInRecipeType } from "../../../types";
import { ButtonSvg } from "../../../ui";
import PlusButton from "../../../asset/svg/PlusButton";

import TimeRangeLine from "./TimeRangeLine";

type Props = {
  time: PreparationTimeInRecipeType;
  onChange: (key: string, value: PreparationTimeInRecipeType) => void;
};

const TimeRanges = ({ time, onChange }: Props) => {
  const handleAddTimeRange = (event) => {
    event.preventDefault();
    const timeRangesCopy = time.timeRanges.slice();
    timeRangesCopy.push({
      processName: "",
      time: "",
    });
    onChange("time", {
      ...time,
      timeRanges: timeRangesCopy,
    });
  };

  const handleRemoveTimeRange = (event, index) => {
    event.preventDefault();
    const timeRangesCopy = time.timeRanges.slice();
    timeRangesCopy.splice(index, 1);
    onChange("time", {
      ...time,
      timeRanges: timeRangesCopy,
    });
  };

  const handleChangeTimeRange = ({ target }, index) => {
    const timeRangesCopy = time.timeRanges.slice();
    console.log("target", target);
    timeRangesCopy[index] = {
      ...timeRangesCopy[index],
      [target.name]: target.value,
    };

    onChange("time", {
      ...time,
      timeRanges: timeRangesCopy,
    });
  };

  return (
    <>
      {time.timeRanges.map((t, index) => (
        <TimeRangeLine
          timeRange={t}
          key={index}
          index={index}
          onChange={handleChangeTimeRange}
          onRemove={handleRemoveTimeRange}
        />
      ))}
      <ButtonSvg onClick={handleAddTimeRange} Icon={PlusButton} />
    </>
  );
};

export default React.memo(TimeRanges);
