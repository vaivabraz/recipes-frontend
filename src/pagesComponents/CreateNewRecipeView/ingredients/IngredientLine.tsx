import React from "react";
import { IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";

import { IngredientsListItemType } from "../../../types";

type Props = {
  key: any;
  entry: IngredientsListItemType;
  onChange: (event, id) => void;
  onRemove: (event, id) => void;
};

const IngredientLine = ({ entry, onChange, onRemove }: Props) => {
  const onInputChange = (e) => {
    onChange(e, entry.id);
  };

  const onRemoveProduct = (e) => {
    onRemove(e, entry.id);
  };

  return (
    <Box display="flex">
      <TextField
        size="small"
        margin="dense"
        placeholder="Produktas"
        value={entry.product}
        onChange={onInputChange}
        name={"product"}
        autoComplete="off"
        sx={{ display: "flex", flex: 1 }}
      />
      <>
        <TextField
          size="small"
          margin="dense"
          placeholder="Kiekis"
          value={entry.quantity}
          onChange={onInputChange}
          name={"quantity"}
          autoComplete="off"
          sx={{ paddingLeft: "6px", width: "120px" }}
        />
        <IconButton
          aria-label="remove"
          onClick={onRemoveProduct}
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

export default React.memo(IngredientLine);
