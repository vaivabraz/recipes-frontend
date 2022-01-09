import axios from "./axios";
import { FullRecipeType, NewFullRecipeType } from "../types";

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

export const getRecipeBySlug = async (slug: string) => {
  try {
    const response = await axios.get(`recipes/${slug}`);
    return response.data;
  } catch (e) {
    if (e.status === 400 && e.data.errorCode) {
      return { error: e.data.errorCode };
    }
    console.log("error:", e);
    return {};
  }
};
