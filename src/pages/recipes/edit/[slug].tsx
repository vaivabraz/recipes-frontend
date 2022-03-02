import { useRouter } from "next/router";
import { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { EditRecipeView } from "../../../pagesComponents";
import { editRecipe } from "../../../services";
import { PrivatePage } from "../../../ui";
import { useRecipeFromCacheOrFetch } from "../../../utils";

const EditRecipe = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { recipeFound } = useRecipeFromCacheOrFetch(slug);
  const queryClient = useQueryClient();
  // const mutation = useMutation(createNewRecipe, {
  //   onSuccess: (response) => {
  //     // const allRecipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
  //     //   "recipes"
  //     // );
  //     // if (response.createdRecipe) {
  //     //   if (allRecipes) {
  //     //     allRecipes.unshift(response.createdRecipe);
  //     //     queryClient.setQueryData("recipes", allRecipes);
  //     //   }
  //     //   router.replace("/recipes");
  //     // }
  //     //TODO: else
  //     router.replace("/recipes/[slug]", `/recipes/${slug}`);
  //   },
  // });

  const mutation = useMutation(editRecipe, {
    onSuccess: (response) => {
      const allRecipes = queryClient.getQueryData<FullRecipeType[] | undefined>(
        "recipes"
      );
      if (response.createdRecipe) {
        if (allRecipes) {
          allRecipes.unshift(response.createdRecipe);
          queryClient.setQueryData("recipes", allRecipes);
        }
        router.replace("/recipes");
      }
      //TODO: else
    },
  });

  const saveChanges = useCallback((recipe) => {
    console.log("saving, recipe", recipe);
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
