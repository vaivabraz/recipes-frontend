import { Button, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";
import { reactQueryKeys } from "../../constants/reactQueryKeys";
import { GetMeApiResponse } from "../../services/User";
import { Tag } from "../../ui";
import styles from "./subMenu.module.scss";

type SubMenuProps = {
  query?: ParsedUrlQueryInput;
};

const SubMenu = ({ query }: SubMenuProps) => {
  const queryClient = useQueryClient();
  const { userCategories } = queryClient.getQueryData<GetMeApiResponse>([
    reactQueryKeys.user,
  ]);
  const selectedCategory = userCategories.find(
    (j) => j.id === query.categories
  );

  return (
    <div className={styles["sub-menu"]}>
      <div className={styles["sub-menu--main-line"]}>
        <Typography variant="h2" textAlign="center">
          Receptai
        </Typography>
        <Link href="/recipes/createNewRecipe">
          <Button variant="contained">Sukurti nauja</Button>
        </Link>
      </div>
      {selectedCategory && (
        <div className={styles["sub-menu--second-line"]}>
          <Tag text={selectedCategory?.title} removable />
        </div>
      )}
    </div>
  );
};

export default SubMenu;
