import React from "react";

import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";
import { PreparationTimeRangeType } from "../../../types";

import { IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";

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
    <Box display="flex">
      <TextField
        size="small"
        margin="dense"
        placeholder="Procesas"
        onChange={handleChange}
        name="processName"
        value={timeRange.processName}
        sx={{ display: "flex", flex: 1 }}
      />
      <>
        <TextField
          size="small"
          margin="dense"
          placeholder="Laikas"
          onChange={handleChange}
          name="time"
          value={timeRange.time}
          sx={{ paddingLeft: "6px", width: "120px" }}
        />
        <IconButton
          aria-label="remove"
          onClick={onRemoveTimeRange}
          color="primary"
          sx={{ margin: "6px 0", padding: "0", width: "40px" }}
          size="large"
        >
          <RemoveCircleOutlineSharpIcon />
        </IconButton>
      </>
    </Box>
  );
};

export default React.memo(TimeRangeLine);
