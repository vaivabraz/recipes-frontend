import React from "react";
import styled from "styled-components";
import { Colors } from "../../../constants";
import { TextSection } from "../..";

type Props = {
  categories: string[];
};

const CategoriesList: React.FC<Props> = ({ categories }) => {
  if (!categories?.length) return null;
  return (
    <TextSection title="Kategorijos: ">
      <CategoriesListContainer>
        {categories?.map((category, index) => (
          <CategoryItem key={category} href="">
            <p>{category}</p>
            {index + 1 !== categories?.length ? ",  " : "."}
          </CategoryItem>
        ))}
      </CategoriesListContainer>
    </TextSection>
  );
};

export default CategoriesList;

const CategoriesListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryItem = styled.a`
  display: flex;
  flex-direction: row;
  margin-right: 0.5rem;
  p {
    color: ${Colors.AccentColor};
  }
`;
