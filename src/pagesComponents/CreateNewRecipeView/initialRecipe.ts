export const initialRecipe = {
  _id: null, //?
  title: "",
  preparation: {
    groupPreparationSteps: false,
    stepsGroups: [{ groupName: "", id: "", index: 0 }],
    stepsList: [{ step: "", id: 1, groupIndex: 0 }],
  },
  ingredients: {
    groupIngredients: false,
    ingredientsGroups: [{ groupName: "", id: "", index: 0 }],
    ingredientsList: [
      { product: "", quantity: "", id: 0, groupIndex: 0 },
      { product: "", quantity: "", id: 1, groupIndex: 0 },
      { product: "", quantity: "", id: 2, groupIndex: 0 },
    ],
  },
  notes: "",
  summary: "",
  portions: "",
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
  slug: "",
  //linkas?
  //private or public
};
