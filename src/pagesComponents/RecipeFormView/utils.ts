import {
  IngredientsInRecipeType,
  PreparationStepsInRecipeType,
} from "../../types";

type ValuesToClean = {
  ingredients: IngredientsInRecipeType;
  preparation: PreparationStepsInRecipeType;
};

export function cleanEmptyValues<ValuesType extends ValuesToClean>(
  values: ValuesType
) {
  const cleanedIngredients = values.ingredients.ingredientsList.filter(
    (i) => i.product
  );
  const finalIngredients: IngredientsInRecipeType = {
    ...values.ingredients,
    ingredientsList: cleanedIngredients,
  };
  const cleanedSteps = values.preparation.stepsList.filter((i) => i.step);
  const finalSteps: PreparationStepsInRecipeType = {
    ...values.preparation,
    stepsList: cleanedSteps,
  };
  const finalRecipe: ValuesType = {
    ...values,
    ingredients: finalIngredients,
    preparation: finalSteps,
  };
  return finalRecipe;
}
