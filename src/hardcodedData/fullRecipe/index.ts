import { FullRecipeType } from "../../types";

// Įdarui
// 200 g spanguolių (šaldytų) (2 stiklinės)
// 360 g aviečių (šaldytų) (3 stiklinės)
// 3 obuoliai nulupti ir supjaustyti gabalėliais
// 110 g rudojo cukraus
// 20 g sviesto
// ½ šaukštelio cinamono
// 1 šaukštelis nutarkuotos apelsino žievelės
// 1 šaukštas brendžio
// 1 šaukštas krakmolo
// Pabarstymui
// 1 šaukštas baltojo cukraus
// cukraus pudros

export const userRecipe: FullRecipeType = {
  title: "Šventinis spanguolių pyragas",
  portions: 6,
  time: "30min",
  ingredients: {
    groupIngredients: true,
    ingredientsGroups: [
      {
        groupName: "Trapi tešla",
        index: 0,
      },
      {
        groupName: "Įdarui",
        index: 1,
      },
      {
        groupName: "Pabarstymui",
        index: 2,
      },
    ],
    ingredientsList: [
      {
        product: "Miltai",
        quantity: "600g",
        groupIndex: 0,
        id: 0,
      },
      {
        product: "Sviestas (labai šaltas)",
        quantity: "350g",
        groupIndex: 0,
        id: 1,
      },
      {
        product: "Cukraus pudra",
        quantity: "80g",
        groupIndex: 0,
        id: 2,
      },
      {
        product: "Kiaušinių tryniai",
        quantity: "2",
        groupIndex: 0,
        id: 3,
      },
      {
        product: "Šaldytos spanguolės",
        quantity: "200g",
        groupIndex: 1,
        id: 4,
      },
      {
        product: "Šaldytos avietės",
        quantity: "200g",
        groupIndex: 1,
        id: 5,
      },
      {
        product: "Cukraus pudra",
        quantity: "2",
        groupIndex: 2,
        id: 6,
      },
    ],
  },
  preparation:
    "Viska supjaustai, sumaisai ir vuola pagaminta!! Viska supjaustai, sumaisai ir vuola pagaminta!! Viska supjaustai, sumaisai ir vuola pagaminta!! Viska supjaustai, sumaisai ir vuola pagaminta!! Viska supjaustai, sumaisai ir vuola pagaminta!! ",
  image: "",
  categories: ["uzkandziai", "greitai"],
  notes: "labai skanus",
  summary: "puikios salotos pasigamint kai nori est ",
  date: 1593548365774,
  author: "Vaiva Br",
  slug: "labai-skanios-salotos",
  recipeId: 66,
  _id: "nezinau_ar_reikalingas",
};
