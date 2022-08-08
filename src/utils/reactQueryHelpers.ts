import { QueryClient } from "@tanstack/react-query";
import { reactQueryKeys } from "../constants/reactQueryKeys";

export const invalidateFilteredRecipeQueries = (queryClient:QueryClient) => {
    queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === reactQueryKeys.recipes &&
          query.queryKey[1] !== undefined,
      });
}