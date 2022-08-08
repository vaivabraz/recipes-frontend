import axios from "./axios";
import { FullRecipeType, NewFullRecipeType } from "../types";

type RecipesQueriesType = {
  categories?: string
}

export const getMyRecipes = async (query: RecipesQueriesType) => {
  let url = "recipes/getMyRecipes";
  try {
    if (query.categories) {
      url = url + "?categories=" + query.categories
    }
    const response = await axios.get<any, { data: FullRecipeType[] }>(url);
    return response.data;
  } catch (e) {
    // if (e.status === 400 && e.data.errorCode) {
    //   return { error: e.data.errorCode };
    // }
    console.log("error:", e);
  }
}
  
export const getRecipeBySlug = async (
  slug: string
): Promise<FullRecipeType> => {
  try {
    const response = await axios.post(`recipes/getRecipe`, {
      recipeSlug: slug,
    });
    return response.data;
  } catch (e) {
    console.log("error:", e);
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
  }
};
