import { RecipesList, RecipesHistoryLayout } from "../../pagesComponents";
import SubMenu from "../../pagesComponents/RecipesList/SubMenu";

const Recipes = () => {
  return (
    <RecipesHistoryLayout>
      <SubMenu />
      <RecipesList />
    </RecipesHistoryLayout>
  );
};

export default Recipes;
