import { useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getRecipeBySlug } from "../services";
import { FullRecipeType } from "../types";

export const useRecipeFromCacheOrFetch = (slug: string) => {
  const queryClient = useQueryClient();

  const cachedRecipe = useMemo(() => {
    const recipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
      "recipes"
    );

    return recipes?.filter((i) => i.slug === slug)[0];
  }, [queryClient, slug]);

  const { data, status } = useQuery(
    ["recipes", slug],
    () => getRecipeBySlug(slug),
    {
      enabled: !!slug && !cachedRecipe,
    }
  );

  const recipeFound = cachedRecipe || data?.[0];
  return { recipeFound, status };
};
