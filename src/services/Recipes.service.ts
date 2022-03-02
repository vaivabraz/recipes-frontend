import axios from "./axios";
import { FullRecipeType, NewFullRecipeType } from "../types";

export const getMyRecipes = async () => {
  try {
    const response = await axios.get("recipes/getMyRecipes");
    return response.data;
  } catch (e) {
    if (e.status === 400 && e.data.errorCode) {
      return { error: e.data.errorCode };
    }
    console.log("error:", e);
    return {};
  }
};

export const getRecipeBySlug = async (
  slug: string
): Promise<FullRecipeType[]> => {
  try {
    const response = await axios.post(`recipes/getRecipe`, {
      recipeSlug: slug,
    });
    return response.data;
  } catch (e) {
    console.log("error:", e);
    // return {};
  }
};

type CreateNewRecipeResponse = { createdRecipe: FullRecipeType };
export const createNewRecipe = async (
  recipe: NewFullRecipeType
): Promise<CreateNewRecipeResponse> => {
  try {
    const response = await axios.post<FullRecipeType>("recipes/createNew", {
      ...recipe,
    });
    return { createdRecipe: response.data };
  } catch (e) {
    console.log("error:", e);
    //
  }
};

type EditRecipeResponse = { updatedRecipe: FullRecipeType };
export const editRecipe = async (
  recipe: FullRecipeType
): Promise<EditRecipeResponse> => {
  try {
    const response = await axios.post<{ updatedRecipe: FullRecipeType }>(
      "recipes/edit",
      {
        recipe,
      }
    );
    return { updatedRecipe: response.data.updatedRecipe };
  } catch (e) {
    console.log("error:", e);
    //
  }
};

export const deleteRecipe = async (recipeSlug: string) => {
  try {
    const response = await axios.post<{ deletedRecipe: FullRecipeType }>(
      "recipes/delete",
      {
        slug: recipeSlug,
      }
    );
    return { deletedRecipe: response.data.deletedRecipe };
  } catch (e) {
    console.log("error:", e);
    //
  }
};
