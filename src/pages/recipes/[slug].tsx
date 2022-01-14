import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { useCallback } from "react";
import { RecipesHistoryLayout, RecipeView } from "../../pagesComponents";
import { useRecipeFromCacheOrFetch } from "../../utils";

export default function Recipe() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const { recipeFound, status } = useRecipeFromCacheOrFetch(slug);

  const onEdit = useCallback(() => {
    router.push("/recipes/edit/[slug]", `/recipes/edit/${slug}`);
  }, [slug]);

  return (
    <RecipesHistoryLayout>
      {status === "loading" && <Typography>Kraunasi...</Typography>}
      {status === "success" && !recipeFound && (
        <Typography>Toks receptas neegzistuoja</Typography>
      )}
      {recipeFound && <RecipeView recipe={recipeFound} onEdit={onEdit} />}
    </RecipesHistoryLayout>
  );
}
