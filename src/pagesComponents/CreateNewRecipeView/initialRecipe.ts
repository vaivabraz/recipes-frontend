export const initialRecipe = {
  _id: null, //?
  title: "",
  preparation: {
    groupPreparationSteps: false,
    stepsGroups: [{ groupName: "", id: "", index: 0 }],
    stepsList: [{ step: "", id: 1, groupIndex: 0 }],
  },
  notes: "",
  summary: "",
  image: "", //?
  time: "", //pakeisti i objekta
  portions: "",
  categories: [],
  ingredients: {
    groupIngredients: false,
    ingredientsGroups: [{ groupName: "", id: "", index: 0 }],
    ingredientsList: [
      { product: "", quantity: "", id: 0, groupIndex: 0 },
      { product: "", quantity: "", id: 1, groupIndex: 0 },
      { product: "", quantity: "", id: 2, groupIndex: 0 },
    ],
  },
  slug: "",
  //linkas?
  //private or public
};

const ingredientsExample = {
  groupIngredients: false,
  ingredientsGroups: [
    { groupName: "Tešlai:", id: "teslai", index: 0 },
    { groupName: "Įdarui:", id: "idarui", index: 1 },
  ],
  ingredientsList: [
    { product: "", quantity: "", id: 0, groupIndex: 0 },
    { product: "", quantity: "", id: 1, groupIndex: 0 },
    { product: "", quantity: "", id: 2, groupIndex: 1 },
  ],
};
