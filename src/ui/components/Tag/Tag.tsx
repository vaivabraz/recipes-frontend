import { Box, Button, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useRouter } from "next/router";

import styles from "./tag.module.scss";

type TagProps = {
  text: string;
  id?: string;
  removable?: boolean;
};

export const Tag: React.FC<TagProps> = ({ text, id, removable }) => {
  const router = useRouter();
  const handleOnClick = (e) => {
    e.stopPropagation();
    router.push("/recipes?categories=" + id);
  };

  const clearCategoryFilters = () => {
    router.push("/recipes");
  };

  return (
    <Box
      component={!removable && id ? "button" : null}
      onClick={id ? handleOnClick : null}
      className={styles.tag}
    >
      <Typography variant="body2">{text}</Typography>
      {removable && (
        <Button
          onClick={clearCategoryFilters}
          size="small"
          className={styles["tag--clear-btn"]}
        >
          <ClearIcon className={styles["tag--clear-btn-icon"]} />
        </Button>
      )}
    </Box>
  );
};
