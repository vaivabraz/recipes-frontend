import React from "react";
import { Text } from "../../ui";

type Props = {
  time: string;
};

const RecipeTime: React.FC<Props> = ({ time }) => {
  return (
    <>
      <Text type="h5" text="UŽTRUKS LAIKO: " />
      <Text text={time} />
    </>
  );
};

export default RecipeTime;
