import { Layout, FullRecipeView } from "../../components/";
import { useRouter } from "next/router";
import { FullRecipe } from "../../types";
import { userRecipeHardcoded } from "../../hardcodedData";

export default function Recipe() {
  const router = useRouter();
  const recipe: FullRecipe = userRecipeHardcoded;
  // <p>Recipe id: {router.query.id}</p>

  return (
    <Layout>
      <FullRecipeView recipe={recipe} />
    </Layout>
  );
}
