export type ShortRecipeType = {
  image: string;
  title: string;
  slug: string;
};

export type FullRecipeType = {
  title: string;
  portions: number;
  time: string;
  ingredients: IngredientsInRecipeType;
  preparation: string;
  image: string;
  categories: string[];
  notes?: string;
  summary: string;
  date: number;
  author: string;
  slug: string;
  recipeId: number;
  _id: string;
};

export type IngredientsInRecipeType = {
  groupIngredients: Boolean;
  ingredientsGroups: IngredientsGroupsType[];
  ingredientsList: IngredientsListItemType[];
};

export type IngredientsListItemType = {
  product: string;
  quantity: string;
  id: number;
  groupIndex: number;
};

export type IngredientsGroupsType = {
  groupName: String;
  id: String;
  index: Number;
};
