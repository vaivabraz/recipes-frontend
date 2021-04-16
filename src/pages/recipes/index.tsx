import { RecipesList } from "../../pagesComponents";
import SubMenu from "../../pagesComponents/RecipesList/SubMenu";
import { Layout } from "../../ui";

const Recipes = () => {
  return (
    <Layout>
      <SubMenu />
      <RecipesList />
    </Layout>
  );
};

export default Recipes;
