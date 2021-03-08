import { Layout } from "../../ui";
import { RecipeView } from "../../pagesComponents";
import { useRouter } from "next/router";
import { FullRecipeType } from "../../types";
import { userRecipeHardcoded } from "../../hardcodedData";
import { userRecipe } from "../../hardcodedData/fullRecipe";

export default function Recipe() {
  const router = useRouter();
  const recipe: FullRecipeType = userRecipe;
  // <p>Recipe id: {router.query.id}</p>

  return (
    <Layout>
      <RecipeView recipe={recipe} />
    </Layout>
  );
}
