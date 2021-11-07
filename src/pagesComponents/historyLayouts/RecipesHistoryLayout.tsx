import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PrivatePage } from "../../ui";

const RecipesHistoryLayout: React.FC = ({ children }) => {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <PrivatePage withMenu rightColumn={isBigScreen ? <h2>asd</h2> : null}>
      <>{children}</>
    </PrivatePage>
  );
};

export default RecipesHistoryLayout;
