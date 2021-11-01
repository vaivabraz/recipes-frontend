import React from "react";
import { Box } from "@mui/system";
import Tag from "./Tag";

type TagsListProps = {
  categories: string[];
};

const TagsList: React.FC<TagsListProps> = ({ categories }) => {
  return (
    <Box sx={{ height: "96px", overflow: "hidden" }}>
      {categories.map((i) => (
        <Tag text={i} />
      ))}
    </Box>
  );
};

export default TagsList;
