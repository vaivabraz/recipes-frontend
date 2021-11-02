import { CreateRecipeView } from "../../pagesComponents";
import { PrivatePage } from "../../ui";

const CreateNewRecipe = () => {
  return (
    <PrivatePage withMenu>
      <CreateRecipeView />
    </PrivatePage>
  );
};

export default CreateNewRecipe;
