import { NewFullRecipeType } from "../../types";

export const initialRecipe: NewFullRecipeType = {
  title: "",
  preparation: {
    groupPreparationSteps: false,
    stepsGroups: [{ groupName: "", index: 0 }],
    stepsList: [{ step: "", groupIndex: 0 }],
  },
  ingredients: {
    groupIngredients: false,
    ingredientsGroups: [{ groupName: "", index: 0 }],
    ingredientsList: [
      { product: "", quantity: "", id: 0, groupIndex: 0 },
      { product: "", quantity: "", id: 1, groupIndex: 0 },
      { product: "", quantity: "", id: 2, groupIndex: 0 },
    ],
  },
  notes: "",
  summary: "",
  portions: null,
  time: {
    splitTime: false,
    totalTime: "",
    timeRanges: [
      {
        processName: "",
        time: "",
      },
    ],
  },

  image: "", //?
  categories: [],
  link: "",
  //linkas?
  //private or public
};
