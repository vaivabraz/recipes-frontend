import { Document } from 'mongoose';
import { IngredientsInRecipeType } from './IngredientsSchema';
import { PreparationStepsInRecipeType } from './PreparationStepsSchema';
import { PreparationTimeInRecipeType } from './PreparationTimeSchema';

export interface UserDefinedRecipeInfo {
  title: string;
  ingredients: IngredientsInRecipeType;
  preparation: PreparationStepsInRecipeType;
  portions: number;
  time: PreparationTimeInRecipeType;
  image: string;
  categories: {id: string, title: string}[];
  notes?: string;
  summary: string;
  link: string;
  private: boolean;
}

export interface RecipeInterface extends UserDefinedRecipeInfo {
  author: string;
  slug: string;
  date: Date;
  // recipeId: number;
  //   _id: string;
}

interface RecipeBaseDocument extends RecipeInterface, Document {
  // date: number;
}

export interface RecipeDocument extends RecipeBaseDocument {}
