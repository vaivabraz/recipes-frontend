import React from "react";
import { Typography, Box, Button } from "@mui/material";

import useFormValidation from "../../utils/useFormValidation";
import { NewFullRecipeType } from "../../types";

import RecipeForm from "./RecipeForm";
import { initialRecipe } from "./initialRecipe";
import validateRecipe from "./validateRecipe";

type FullRecipeViewProps = {
  recipe?: NewFullRecipeType;
};

const CreateRecipeView = ({ recipe }: FullRecipeViewProps) => {
  const {
    handleSubmit,
    handleChange,
    handleCustomChange,
    handleBlur,
    values,
    errors,
  } = useFormValidation<NewFullRecipeType>(initialRecipe, validateRecipe, () =>
    console.log("submit! ups!")
  );

  return (
    <Box>
      <Typography
        variant="h2"
        textAlign="center"
        paddingTop={"48px"}
        paddingBottom={"24px"}
      >
        Sukurti nauja recepta
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
          Sukurti
        </Button>
      </Box>
    </Box>
  );
};

export default CreateRecipeView;
