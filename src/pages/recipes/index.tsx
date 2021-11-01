import { RecipesList } from "../../pagesComponents";
import SubMenu from "../../pagesComponents/RecipesList/SubMenu";
import { PrivatePage } from "../../ui";

const Recipes = () => {
  return (
    <PrivatePage withMenu rightColumn={<h2>asd</h2>}>
      <>
        <SubMenu />
        <RecipesList />
      </>
    </PrivatePage>
  );
};

export default Recipes;
