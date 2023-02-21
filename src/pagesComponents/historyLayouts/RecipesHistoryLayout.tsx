import React from "react";
import { PrivatePage } from "../../ui";
import { useScreenSizeUp } from "../../utils";

const RecipesHistoryLayout: React.FC = ({ children }) => {
  const isBigScreen = useScreenSizeUp("lg");

  return (
    <PrivatePage withMenu rightColumn={isBigScreen ? <h2>asd</h2> : null}>
      <>{children}</>
    </PrivatePage>
  );
};

export default RecipesHistoryLayout;
