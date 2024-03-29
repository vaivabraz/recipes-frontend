import { useRouter } from "next/router";
import { useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reactQueryKeys } from "../../../constants/reactQueryKeys";
import { EditRecipeView } from "../../../pagesComponents";
import { editRecipe, deleteRecipe } from "../../../services";
import { FullRecipeType } from "../../../types";
import { PrivatePage } from "../../../ui";
import { useRecipeFromCacheOrFetch } from "../../../utils";
import { invalidateFilteredRecipeQueries } from "../../../utils/reactQueryHelpers";

const EditRecipe = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { recipeFound } = useRecipeFromCacheOrFetch(slug);
  const queryClient = useQueryClient();

  const mutationToEdit = useMutation(editRecipe, {
    onSuccess: (response) => {
      const allRecipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
        [reactQueryKeys.recipes]
      );
      if (response.updatedRecipe) {
        if (allRecipes) {
          const updatedRecipes = allRecipes.map((e) =>
            e.slug === slug ? response.updatedRecipe : e
          );
          queryClient.setQueryData([reactQueryKeys.recipes], updatedRecipes);
        } else {
          queryClient.setQueryData(
            [reactQueryKeys.recipes, slug],
            response.updatedRecipe
          );
        }
        invalidateFilteredRecipeQueries(queryClient);
        router.replace("/recipes/[slug]", `/recipes/${slug}`);
      }
      //TODO: error message
    },
  });

  const mutationToDelete = useMutation(deleteRecipe, {
    onSuccess: (response) => {
      const allRecipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
        [reactQueryKeys.recipes]
      );
      if (response) {
        if (allRecipes) {
          const updatedRecipes = allRecipes.filter((e) => e.slug !== slug);
          queryClient.setQueryData([reactQueryKeys.recipes], updatedRecipes);
        }
        invalidateFilteredRecipeQueries(queryClient);
        router.replace("/recipes");
      }
      //TODO: error message
    },
  });

  const handleSaveChanges = useCallback((recipe) => {
    mutationToEdit.mutate(recipe);
  }, []);

  const handleCancelEditing = useCallback(() => {
    router.replace("/recipes/[slug]", `/recipes/${slug}`);
  }, [recipeFound]);

  const handleDeleteRecipe = useCallback(() => {
    mutationToDelete.mutate(slug);
  }, []);

  return (
    <PrivatePage withMenu>
      {recipeFound && (
        <EditRecipeView
          recipe={recipeFound}
          onSave={handleSaveChanges}
          onCancel={handleCancelEditing}
          onDelete={handleDeleteRecipe}
        />
      )}
    </PrivatePage>
  );
};

export default EditRecipe;
