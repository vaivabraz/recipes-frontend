import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { PreparationTimeInRecipeType } from "../../../types";
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
    <Box display="flex" flexDirection="column" paddingBottom={"9px"}>
      <Box display="flex" alignItems="center">
        <Typography variant="h5">Kiek laiko uztruks</Typography>
        <Button onClick={splitTimeButtonProps.onClick}>
          {splitTimeButtonProps.text}
        </Button>
      </Box>
      {time.splitTime ? (
        <TimeRanges time={time} onChange={onChange} />
      ) : (
        <TextField
          size="small"
          margin="dense"
          placeholder="Laikas"
          onChange={handleTotalTimeChange}
          value={time.totalTime}
        />
      )}
    </Box>
  );
};

export default React.memo(Time);
