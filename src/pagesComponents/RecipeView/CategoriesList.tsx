import React from "react";
import styled from "styled-components";
import { CategoryType } from "../../types";
import { TextSection, Row } from "../../ui";
import Tag from "../RecipesList/Tag";

type Props = {
  categories: CategoryType[];
};

const CategoriesList: React.FC<Props> = ({ categories }) => {
  if (!categories?.length) return null;
  return (
    <TextSection title="KATEGORIJOS: ">
      <Row>
        {categories?.map((category) => (
          <CategoryItem key={category.id} href="">
            <Tag key={category.id} text={category.title} />
          </CategoryItem>
        ))}
      </Row>
    </TextSection>
  );
};

export default CategoriesList;

const CategoryItem = styled.a`
  display: flex;
  flex-direction: row;
  margin-right: 0.5rem;
`;
