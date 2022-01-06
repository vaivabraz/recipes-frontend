import { useQuery } from "react-query";
import { RecipesList, RecipesHistoryLayout } from "../../pagesComponents";
import { getMyRecipes } from "../../services";

const Recipes = () => {
  const { isLoading, isError, data } = useQuery("recipes", getMyRecipes);

  return (
    <RecipesHistoryLayout>
      <RecipesList recipesList={data} isLoading={isLoading} isError={isError} />
    </RecipesHistoryLayout>
  );
};

export default Recipes;
