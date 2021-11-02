import React from "react";
import { PrivatePage } from "../../ui";

const RecipesHistoryLayout: React.FC = ({ children }) => {
  return (
    <PrivatePage withMenu rightColumn={<h2>asd</h2>}>
      <>{children}</>
    </PrivatePage>
  );
};

export default RecipesHistoryLayout;
