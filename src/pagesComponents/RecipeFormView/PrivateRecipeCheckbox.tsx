import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Typography } from "@mui/material";

type Props = {
  isRecipePrivate: boolean;
  onChange: (key: string, value: boolean) => void;
};

const PrivateRecipeCheckbox = ({ isRecipePrivate, onChange }: Props) => {
  const handleChange = (e) => {
    onChange("private", e.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={isRecipePrivate}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            size="small"
          />
        }
        label="Privatus receptas"
      />

      <Tooltip
        sx={{
          height: 16,
          color: "var(--AccentColor)",
          marginLeft: "-20px",
        }}
        title={
          <Box>
            <Typography variant="body2">
              Privatus receptas nebus matomas neprisijungus ir kitiems
              vartotojams
            </Typography>
          </Box>
        }
      >
        <InfoOutlinedIcon />
      </Tooltip>
    </>
  );
};

export default React.memo(PrivateRecipeCheckbox);
