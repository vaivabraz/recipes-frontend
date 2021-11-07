import React from "react";
import { Typography, Box } from "@mui/material";
import {
  PreparationTimeInRecipeType,
  PreparationTimeRangeType,
} from "../../types";

type TimeRangesProps = {
  timeRanges: PreparationTimeRangeType[];
};
const TimeRanges: React.FC<TimeRangesProps> = ({ timeRanges }) => {
  return (
    <Box paddingLeft="24px">
      {timeRanges.map((g) => (
        <Box display="flex">
          <Typography variant="h5">{g.processName}</Typography>
          <Typography variant="body1" paddingLeft="9px">
            {g.time}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

type Props = {
  time: PreparationTimeInRecipeType;
};

const RecipeTime: React.FC<Props> = ({ time }) => {
  if (!time?.totalTime && !time?.timeRanges?.length) {
    return;
  }

  return time.splitTime ? (
    <TimeRanges timeRanges={time.timeRanges} />
  ) : (
    <Box display="flex">
      <Typography variant="h5">UŽTRUKS LAIKO: </Typography>
      <Typography variant="body1" paddingLeft="9px">
        {time.totalTime}
      </Typography>
    </Box>
  );
};

export default RecipeTime;
