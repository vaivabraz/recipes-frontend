import { RecipesList } from "../../pagesComponents";
import { PrivatePage } from "../../ui";

const Recipes = () => {
  return (
    <PrivatePage withMenu>
      <RecipesList />
    </PrivatePage>
  );
};

export default Recipes;
