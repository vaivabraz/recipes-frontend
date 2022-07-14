import { useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { reactQueryKeys } from "../constants/reactQueryKeys";
import { getRecipeBySlug } from "../services";
import { FullRecipeType } from "../types";

export const useRecipeFromCacheOrFetch = (slug: string) => {
  const queryClient = useQueryClient();

  const cachedRecipe = useMemo(() => {
    const recipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
      reactQueryKeys.recipes
    );

    return recipes?.filter((i) => i.slug === slug)[0];
  }, [queryClient, slug]);

  const { data, status } = useQuery(
    [reactQueryKeys.recipes, slug],
    () => getRecipeBySlug(slug),
    {
      enabled: !!slug && !cachedRecipe,
    }
  );

  const recipeFound = cachedRecipe || data;
  return { recipeFound, status };
};
