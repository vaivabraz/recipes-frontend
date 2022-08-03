import React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

import Tag from "../../../ui/components/Tag";
import { reactQueryKeys } from "../../../constants/reactQueryKeys";
import { GetMeApiResponse } from "../../../services/User";
import { CategoryType } from "../../../types";

type Props = {
  selectedCategories: CategoryType[];
  onChange: (key: string, value: CategoryType[]) => void;
};

const CategoriesSelector = ({ selectedCategories = [], onChange }: Props) => {
  const queryClient = useQueryClient();
  const { userCategories } = queryClient.getQueryData<GetMeApiResponse>([
    reactQueryKeys.user,
  ]);

  const [selectedCategoriesIds, setSelectedCategoriesIds] = React.useState<
    string[]
  >(selectedCategories.map((i) => i?.id));

  const handleChange = ({ target: { value } }) => {
    setSelectedCategoriesIds(value);
    const fullValues = value.map((i) => userCategories.find((j) => j.id === i));
    onChange("categories", fullValues);
  };

  return (
    <Select
      multiple
      value={selectedCategoriesIds}
      onChange={handleChange}
      displayEmpty={true}
      renderValue={(selected) =>
        !selected || selected.length === 0 ? (
          <Typography color={"#666666"} variant="h5">
            Kategorijos
          </Typography>
        ) : (
          <Box
            sx={{
              overflow: "hidden",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            {selectedCategories.map((i) => (
              <Tag key={i.id} text={i.title} />
            ))}
          </Box>
        )
      }
      sx={{ width: "100%" }}
    >
      {userCategories.map((category) => (
        <MenuItem key={category.id} value={category.id}>
          {category.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default React.memo(CategoriesSelector);
