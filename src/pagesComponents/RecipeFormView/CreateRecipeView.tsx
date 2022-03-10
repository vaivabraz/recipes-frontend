import React from "react";
import { Typography, Box, Button } from "@mui/material";

import useFormValidation from "../../utils/useFormValidation";
import { FullRecipeType, NewFullRecipeType } from "../../types";

import RecipeForm from "./RecipeForm";
import { initialRecipe } from "./initialRecipe";
import validateRecipe from "./validateRecipe";
import { createNewRecipe } from "../../services";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { cleanEmptyValues } from "./utils";

type FullRecipeViewProps = {
  recipe?: NewFullRecipeType;
};

export const CreateRecipeView = ({ recipe }: FullRecipeViewProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation(createNewRecipe, {
    onSuccess: (response) => {
      const allRecipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
        "recipes"
      );
      if (response.createdRecipe) {
        if (allRecipes) {
          allRecipes.unshift(response.createdRecipe);
          queryClient.setQueryData("recipes", allRecipes);
        }
        router.replace("/recipes");
      }
      //TODO: else
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleCustomChange,
    handleBlur,
    values,
    errors,
  } = useFormValidation<NewFullRecipeType>(
    initialRecipe,
    validateRecipe,
    async (values) => {
      const finalRecipe = cleanEmptyValues(values);
      mutation.mutate(finalRecipe);
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
