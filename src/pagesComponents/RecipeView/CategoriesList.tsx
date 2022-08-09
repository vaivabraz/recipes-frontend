import React from "react";
import { CategoryType } from "../../types";
import { TextSection, Row } from "../../ui";
import { Tag } from "../../ui";

type Props = {
  categories: CategoryType[];
};

const CategoriesList: React.FC<Props> = ({ categories }) => {
  if (!categories?.length) return null;
  return (
    <TextSection title="KATEGORIJOS: ">
      <Row>
        {categories?.map((i) => (
          <Tag key={i.id} id={i.id} text={i.title} />
        ))}
      </Row>
    </TextSection>
  );
};

export default CategoriesList;
