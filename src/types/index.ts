export type ShortRecipe = {
  image: string;
  title: string;
  slug: string;
};

export type FullRecipe = {
  title: string;
  portions: number;
  time: string;
  ingredients: IngredientsListItem[];
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

export type IngredientsListItem = {
  product: string;
  quantity: string;
};
