import React from "react";
import { Box } from "@mui/system";
import { IconButton, TextField, Typography } from "@mui/material";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";

import { StepsListItemType } from "../../../types";

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
    <Box display="flex">
      <Typography paddingTop={"14px"} paddingRight={"9px"}>
        {index + 1 + "."}
      </Typography>
      <TextField
        placeholder="Kaip gaminti..."
        margin="dense"
        value={entry.step}
        onChange={onInputChange}
        autoComplete="off"
        multiline
        sx={{ display: "flex", flex: 1 }}
        size="small"
        minRows={3}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          aria-label="remove"
          onClick={onRemoveProduct}
          color="primary"
          sx={{ margin: "6px 0", padding: "0", width: "40px", height: "40px" }}
          size="large"
        >
          <RemoveCircleOutlineSharpIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default React.memo(Step);
