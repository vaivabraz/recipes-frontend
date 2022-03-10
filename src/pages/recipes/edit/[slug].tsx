import { useRouter } from "next/router";
import { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { EditRecipeView } from "../../../pagesComponents";
import { editRecipe } from "../../../services";
import { FullRecipeType } from "../../../types";
import { PrivatePage } from "../../../ui";
import { useRecipeFromCacheOrFetch } from "../../../utils";

const EditRecipe = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { recipeFound } = useRecipeFromCacheOrFetch(slug);
  const queryClient = useQueryClient();

  const mutation = useMutation(editRecipe, {
    onSuccess: (response) => {
      const allRecipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
        "recipes"
      );
      if (response.updatedRecipe) {
        if (allRecipes) {
          allRecipes.unshift(response.updatedRecipe);
          queryClient.setQueryData("recipes", allRecipes);
        }
        router.replace("/recipes/[slug]", `/recipes/${slug}`);
      }
      //TODO: error message
    },
  });

  const saveChanges = useCallback((recipe) => {
    mutation.mutate(recipe);
  }, []);

  const goToRecipePage = useCallback(() => {
    router.replace("/recipes/[slug]", `/recipes/${slug}`);
  }, [recipeFound]);

  const deleteRecipe = useCallback(() => {
    console.log("deleting");
  }, []);

  return (
    <PrivatePage withMenu>
      {recipeFound && (
        <EditRecipeView
          recipe={recipeFound}
          onSave={saveChanges}
          onCancel={goToRecipePage}
          onDelete={deleteRecipe}
        />
      )}
    </PrivatePage>
  );
};

export default EditRecipe;
