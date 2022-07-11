import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { RecipesList } from "../../pagesComponents";
import { PrivatePage } from "../../ui";

const Recipes = () => {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <PrivatePage withMenu rightColumn={isBigScreen ? <h2>Right Column</h2> : null}>
      <RecipesList />
    </PrivatePage>
  );
};

export default Recipes;
