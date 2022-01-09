import { RecipesHistoryLayout, RecipeView } from "../../pagesComponents";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "react-query";
import { FullRecipeType } from "../../types";
import { getRecipeBySlug } from "../../services";
import { Typography } from "@mui/material";

export default function Recipe() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const queryClient = useQueryClient();
  const recipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
    "recipes"
  );
  const cachedRecipe = recipes?.filter((i) => i.slug === slug)[0];
  const { data, isLoading } = useQuery(
    ["recipes", slug],
    () => getRecipeBySlug(slug),
    {
      enabled: !!slug && !cachedRecipe,
    }
  );

  const recipeFound = cachedRecipe || data?.[0];

  return (
    <RecipesHistoryLayout>
      {isLoading && <Typography>Kraunasi...</Typography>}
      {data?.length === 0 && (
        <Typography>Toks receptas neegzistuoja</Typography>
      )}
      {recipeFound && <RecipeView recipe={recipeFound} />}
    </RecipesHistoryLayout>
  );
}
