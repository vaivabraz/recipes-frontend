import { FullRecipeView } from "../../components/";
import { Layout } from "../../ui";
import { useRouter } from "next/router";
import { FullRecipeType } from "../../types";
import { userRecipeHardcoded } from "../../hardcodedData";

export default function Recipe() {
  const router = useRouter();
  const recipe: FullRecipeType = userRecipeHardcoded;
  // <p>Recipe id: {router.query.id}</p>

  return (
    <Layout>
      <FullRecipeView recipe={recipe} />
    </Layout>
  );
}
