import React from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { Button } from "@mui/material";

import { PreparationTimeInRecipeType } from "../../../types";
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
      <Button
        startIcon={<AddCircleOutlineSharpIcon />}
        onClick={handleAddTimeRange}
        sx={{ justifyContent: "flex-start" }}
      >
        Pridėti laiko tarpa
      </Button>
    </>
  );
};

export default React.memo(TimeRanges);
