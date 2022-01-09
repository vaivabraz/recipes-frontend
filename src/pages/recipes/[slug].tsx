import { RecipesHistoryLayout, RecipeView } from "../../pagesComponents";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "react-query";
import { FullRecipeType } from "../../types";
import { getRecipeBySlug } from "../../services";

export default function Recipe() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const queryClient = useQueryClient();
  const recipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
    "recipes"
  );
  const cachedRecipe = recipes?.filter((i) => i.slug === slug)[0];
  const { data } = useQuery(["recipes", slug], () => getRecipeBySlug(slug), {
    enabled: !!slug && !cachedRecipe,
  });

  const recipeFound = cachedRecipe || data?.[0];
  //TODO: recipe does not exist
  if (!recipeFound) {
    return "Loading...";
  }

  return (
    <RecipesHistoryLayout>
      <RecipeView recipe={recipeFound} />
    </RecipesHistoryLayout>
  );
}
