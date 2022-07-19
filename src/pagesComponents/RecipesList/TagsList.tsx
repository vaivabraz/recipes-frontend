import React from "react";
import { Box } from "@mui/system";
import { CategoryType } from "../../types";

import Tag from "./Tag";

type TagsListProps = {
  categories: CategoryType[];
};

const TagsList: React.FC<TagsListProps> = ({ categories }) => {
  return (
    <Box sx={{ height: "96px", overflow: "hidden" }}>
      {categories.map((i) => (
        <Tag key={i.id} text={i.title} />
      ))}
    </Box>
  );
};

export default TagsList;
