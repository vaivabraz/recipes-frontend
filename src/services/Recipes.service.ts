import axios from "./axios";
import { NewFullRecipeType } from "../types";

type CreateNewRecipeResponse = {};

export const createNewRecipe = async (
  recipe: NewFullRecipeType
): Promise<CreateNewRecipeResponse> => {
  try {
    const response = await axios.post("recipes/createNew", {
      ...recipe,
    });
    return response.data;
  } catch (e) {
    if (e.status === 400 && e.data.errorCode) {
      return { error: e.data.errorCode };
    }
    console.log("error:", e);
    return {};
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
