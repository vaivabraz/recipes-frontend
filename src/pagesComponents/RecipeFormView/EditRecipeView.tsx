import React from "react";
import { Typography, Box, Button } from "@mui/material";

import useFormValidation from "../../utils/useFormValidation";
import { FullRecipeType } from "../../types";

import RecipeForm from "./RecipeForm";
import validateRecipe from "./validateRecipe";
import { initialRecipe } from "./initialRecipe";
import { cleanEmptyValues } from "./utils";

type FullRecipeViewProps = {
  recipe: FullRecipeType;
  onSave: (recipe: FullRecipeType) => void;
  onCancel: () => void;
  onDelete: () => void;
};

export const EditRecipeView = ({
  recipe,
  onSave,
  onCancel,
  onDelete,
}: FullRecipeViewProps) => {
  const {
    handleSubmit,
    handleChange,
    handleCustomChange,
    handleBlur,
    values,
    errors,
  } = useFormValidation<FullRecipeType>(
    { ...initialRecipe, ...recipe },
    validateRecipe,
    async (values) => {
      const finalRecipe = cleanEmptyValues(values);
      //TODO: cia reik async?
      onSave(finalRecipe);
    }
  );

  return (
    <Box>
      <Typography
        variant="h2"
        textAlign="center"
        paddingTop={"48px"}
        paddingBottom={"24px"}
      >
        Redaguoti recepta
      </Typography>
      <RecipeForm
        handleChange={handleChange}
        handleCustomChange={handleCustomChange}
        handleBlur={handleBlur}
        values={values}
        errors={errors}
      />
      <Box display="flex" justifyContent="center" padding="24px">
        <Button variant="contained" onClick={handleSubmit}>
          Išsaugoti pakeitimus
        </Button>
        <Button variant="outlined" onClick={onCancel} sx={{ margin: "0 12px" }}>
          Atšaukti pakeitimus
        </Button>
        <Button variant="outlined" onClick={onDelete}>
          Ištrinti receptą
        </Button>
      </Box>
    </Box>
  );
};
